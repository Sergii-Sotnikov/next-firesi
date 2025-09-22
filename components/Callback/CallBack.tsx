"use client";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "react-phone-input-2/lib/style.css";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import css from "./CallBack.module.css";
import type { FormikHelpers } from "formik";
import SuccessfullCall from "../Fipron/SuccessfullCall/SuccessfullCall";


interface FormCallValues {
  name: string;
  phone: string;
  consent: boolean;
  message?: string;
  company?: string;
}

interface CallBackProps {
  closeModal: () => void;
  productName: string;
}

export default function Callback({ closeModal, productName }: CallBackProps) {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
    const [successful, setSuccessful] = useState<boolean>(false);
  const myKeyRECAPTCHA = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const initialcallBackValues: FormCallValues = {
    name: "",
    phone: "+380",
    consent: false,
    message: "",
    company: "",
  };

  const CallSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Ім'я має містити щонайменше 3 літери")
      .required("Поле ім'я є обов’язковим"),
    phone: Yup.string()
      .matches(/^\+380\d{9}$/, "Номер повинен бути у форматі +380XXXXXXXXX")
      .required("Номер телефону обов'язковий"),
    message: Yup.string().trim().max(250, "Максимум 250 символів"),
    consent: Yup.boolean().oneOf(
      [true],
      "Ви повинні погодитися з обробкою персональних даних"
    ),
  });

  const handleSubmit = async (
    values: FormCallValues,
    actions: FormikHelpers<FormCallValues>
  ) => {
    if (!recaptchaToken) {
      toast.error("Підтвердіть, що ви не робот");
      return;
    }

    const payload = {
      token: recaptchaToken,
      type: "Замовити консультацію сторінка FIPRON",
      name: values.name,
      phone: values.phone,
      product: productName,
      message: values.message?.trim() || "Відсутнє",
      company: values.company,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Помилка надсилання");
      }

      toast.success("Ми вам зателефонуємо!");
      setSuccessful(true);
      actions.resetForm();
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
      closeModal();
    } catch (err) {
      console.error(err);
      toast.error("Сталася помилка при надсиланні. Спробуйте пізніше.");
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      {!successful ? (<>
      <p className={css.productName}>Замовити консультацію</p>
      <div className={css.callBackForm}>
        <Formik
          initialValues={initialcallBackValues}
          onSubmit={handleSubmit}
          validationSchema={CallSchema}
        >
          {({ isValid, dirty, isSubmitting }) => (
            <Form className={css.form}>
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

              <div className={css.formMessage}>
                <label className={css.labelMessage} htmlFor="message">
                  Коментар до замовлення
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    className={css.inputMessage}
                    placeholder="Напишіть бажання або деталі"
                    rows={4}
                    maxLength={250}
                  />
                </label>
                <ErrorMessage
                  name="message"
                  component="span"
                  className={css.errorMessage}
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
                <div className={css.recaptchaRow}>
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={myKeyRECAPTCHA || ""}
                    theme="dark"
                    size="normal"
                    onChange={(t) => setRecaptchaToken(t)}
                    onExpired={() => setRecaptchaToken(null)}
                    onErrored={() => setRecaptchaToken(null)}
                  />
                </div>
              )}
              <div className={css.buttonGroup}>
                <button
                  className={css.btnContact}
                  type="submit"
                  disabled={!(isValid && dirty && recaptchaToken)}
                >
                  <span className={css.btnContactSpan}>
                    {isSubmitting ? "Відправка..." : "Замовити консультацію"}
                    
                  </span>
                </button>
                <button
                  className={css.btnContactCancel}
                  type="button"
                  onClick={() => {
                    closeModal();
                  }}
                >
                  <span className={css.btnContactSpanCancel}>Закрити</span>
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      </>):(<SuccessfullCall
          closeModal={closeModal}
          setSuccessful={setSuccessful}
        />)}
      
    </>
  );
}
