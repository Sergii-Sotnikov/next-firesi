"use client";
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
import { useField } from "formik";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import Image from "next/image";
import SuccessfulOrder from "../SuccessfulOrder/SuccessfulOrder";

interface OrderProps {
  closeModal: () => void;
  productId: string;
}

interface FormOrderValues {
  id: string;
  name: string;
  phone: string;
  consent: boolean;
  company?: string;
}

export default function Order({ closeModal, productId }: OrderProps) {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [successful, setSuccessful] = useState<boolean>(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const myKeyRECAPTCHA = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const initialcallBackValues: FormOrderValues = {
    id: productId,
    name: "",
    phone: "+380",
    consent: false,
    company: "",
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
      actions.setSubmitting(false);
      return;
    }
    try {
      const payload = {
        token: recaptchaToken,
        type: "Замовлення вогнегасника на головній сторінці",
        name: values.name,
        phone: values.phone,
        product: values.id,
        message: "Відсутній",
        company: values.company,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "На жаль, не вдалося відправити Ваш запит.");
      }

      toast.success("Ми вам зателефонуємо!");
      setSuccessful(true);
      actions.resetForm();
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
    } catch (error) {
      console.error(error);
      toast.error("Сталася помилка при відправці. Спробуйте пізніше.");
    } finally {
      actions.setSubmitting(false);
    }
  };

  function FormikRadixSelect({
    name,
    products,
    triggerClass,
    labelId,
  }: {
    name: string;
    products: { id: string; title: string; priceEUR: number }[];
    triggerClass?: string;
    labelId?: string;
  }) {
    const [field, , helpers] = useField<string>(name);

    return (
      <CustomSelect
        value={field.value}
        onChange={(v) => {
          helpers.setValue(v);
          helpers.setTouched(true);
        }}
        products={products}
        triggerClass={triggerClass}
        ariaLabelledby={labelId}
      />
    );
  }

  return (
    <>
      <Toaster position="top-center" />
      {successful ? (
        <>
          <p className={css.productName}>Зробити замовлення</p>

          <div className={css.callBackForm}>
            <Formik
              initialValues={initialcallBackValues}
              onSubmit={handleSubmit}
              validationSchema={CallSchema}
              enableReinitialize
            >
              {({ isValid, dirty, isSubmitting, values }) => {
                const selected = products.find((p) => p.id === values.id);

                return (
                  <Form className={css.form}>
                    <div className={css.formProduct}>
                      <Field
                        type="text"
                        name="company"
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                        style={{
                          position: "absolute",
                          left: "-10000px",
                          width: 1,
                          height: 1,
                          overflow: "hidden",
                        }}
                      />
                      <label id="productIdLabel" className={css.labelProduct}>
                        Виберіть товар:
                      </label>

                      <FormikRadixSelect
                        name="id"
                        products={products}
                        triggerClass={css.selectProduct}
                        labelId="productIdLabel"
                      />

                      <ErrorMessage
                        name="id"
                        component="span"
                        className={css.errorProduct}
                      />
                    </div>

                    {selected && (
                      <div className={css.productPreview}>
                        <Image
                          className={css.productImg}
                          src={selected.image.webp2x}
                          width={120}
                          height={204}
                          alt="Логотип Firesi"
                        />
                        <div className={css.productMeta}>
                          <div className={css.productNameRow}>
                            <p className={css.productTitle}>
                              Модель: {selected.id}
                            </p>
                          </div>

                          <ul className={css.productDescList}>
                            {selected.descriptions.map((description, index) => (
                              <li key={index} className={css.productDescItem}>
                                <p className={css.descrText}>{description}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

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
                        onExpired={() => setRecaptchaToken(null)}
                        onErrored={() => setRecaptchaToken(null)}
                      />
                    )}

                    <div className={css.buttonGroup}>
                      <button
                        className={css.btnContact}
                        type="submit"
                        disabled={
                          isSubmitting || !(isValid && dirty && recaptchaToken)
                        }
                      >
                        <span className={css.btnContactSpan}>
                          {isSubmitting ? "Відправка..." : "Замовити дзвінок"}
                          {!isSubmitting && (
                            <PhoneCall className={css.iconPhone} />
                          )}
                        </span>
                      </button>

                      <button
                        className={css.btnContactCancel}
                        type="button"
                        onClick={closeModal}
                      >
                        <span className={css.btnContactSpanCancel}>
                          Закрити
                        </span>
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </>
      ) : (
        <SuccessfulOrder
          closeModal={closeModal}
          setSuccessful={setSuccessful}
        />
      )}
    </>
  );
}
