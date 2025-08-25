import css from "./Order.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "react-phone-input-2/lib/style.css";
import ReCAPTCHA from "react-google-recaptcha";
import { PhoneCall } from "lucide-react";
import { useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import type { FormikHelpers } from "formik";
import sendEmail from "@/src/services/sendEmail";
import type { EmailTemplateParams } from "@/src/types/emailService.types";
import { products } from "@/src/data/products";

interface OrderProps {
  closeModal: () => void;
  productId: string;
}

interface FormOrderValues {
  id: string;
  name: string;
  phone: string;
  consent: boolean;
}

export default function Order({ closeModal, productId }: OrderProps) {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const myKeyRECAPTCHA = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const initialcallBackValues: FormOrderValues = {
    id: productId,
    name: "",
    phone: "+380",
    consent: false,
  };

  const CallSchema = Yup.object().shape({
    id: Yup.string()
      .required("Оберіть продукт")
      .test("exists", "Некоректний продукт", (val) =>
        products.some((p) => p.id === val)
      ),
    name: Yup.string()
      .min(3, "Ім'я має містити щонайменше 3 літери")
      .required("Поле ім'я є обов’язковим"),
    phone: Yup.string()
      .matches(/^\+380\d{9}$/, "Номер повинен бути у форматі +380XXXXXXXXX")
      .required("Номер телефону обов'язковий"),
    consent: Yup.boolean().oneOf(
      [true],
      "Ви повинні погодитися з обробкою персональних даних"
    ),
  });

  const handleSubmit = async (
    values: FormOrderValues,
    actions: FormikHelpers<FormOrderValues>
  ) => {
    if (!recaptchaToken) {
      toast.error("Підтвердіть, що ви не робот");
      return;
    }

    const emailData: EmailTemplateParams = {
      name: values.name,
      phone: values.phone,
      message: "Відсутній",
      type: values.id,
      time: new Date().toLocaleString("uk-UA"),
      product: "Відсутній",
      "g-recaptcha-response": recaptchaToken,
    };

    const result = await sendEmail(
      emailData as unknown as Record<string, unknown>
    );

    if (result) {
      toast.success("Ми вам зателефонуємо!");
      actions.resetForm();
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
      closeModal();
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <p className={css.productName}>Зробити замовлення</p>
      <div className={css.callBackForm}>
        <Formik
          initialValues={initialcallBackValues}
          onSubmit={handleSubmit}
          validationSchema={CallSchema}
          enableReinitialize
        >
          {({ isValid, dirty }) => (
            <Form className={css.form}>
              <div className={css.formProduct}>
                <label className={css.labelProduct} htmlFor="id">
                  Виберіть товар:
                </label>
                <Field
                  as="select"
                  id="id"
                  name="id"
                  className={css.selectProduct}
                >
                  {products.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.title}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="id"
                  component="span"
                  className={css.errorProduct}
                />
              </div>

              <div className={css.formName}>
                <label className={css.labelName} htmlFor="name">
                  Ваше імя:
                  <Field
                    id="name"
                    type="text"
                    name="name"
                    className={css.inputName}
                  />
                </label>
                <ErrorMessage
                  name="name"
                  component="span"
                  className={css.errorName}
                />
              </div>

              <div className={css.formPhone}>
                <label className={css.labelPhone} htmlFor="phone">
                  Ваш телефон:
                  <Field
                    id="phone"
                    type="text"
                    name="phone"
                    className={css.inputPhone}
                    placeholder="+380XXXXXXXXX"
                    maxLength={13}
                  />
                </label>
                <ErrorMessage
                  name="phone"
                  component="span"
                  className={css.errorPhone}
                />
              </div>

              <div className={css.formGroupCheckbox}>
                <label className={css.checkboxLabel}>
                  <Field
                    type="checkbox"
                    name="consent"
                    className={css.checkboxInput}
                  />
                  Я погоджуюсь з обробкою моїх персональних даних
                </label>
                <ErrorMessage
                  name="consent"
                  component="span"
                  className={css.errorConsent}
                />
              </div>

              {isValid && dirty && (
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={myKeyRECAPTCHA || ""}
                  onChange={(token) => setRecaptchaToken(token)}
                />
              )}
              <div className={css.buttonGroup}>
                <button
                  className={css.btnContact}
                  type="submit"
                  disabled={!(isValid && dirty && recaptchaToken)}
                >
                  <span className={css.btnContactSpan}>
                    ЗАМОВИТИ ДЗВІНОК
                    <PhoneCall className={css.iconPhone} />
                  </span>
                </button>
                <button
                  className={css.btnContactCancel}
                  type="button"
                  onClick={() => {
                    closeModal();
                  }}
                >
                  <span className={css.btnContactSpanCancel}>ЗАКРИТИ</span>
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
