"use client";
import css from "./Contact.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import type { FormikHelpers } from "formik";
import * as Yup from "yup";
import { toast, Toaster } from "react-hot-toast";
import "react-phone-input-2/lib/style.css";
import { PhoneCall } from "lucide-react";
import { TbTruckDelivery } from "react-icons/tb";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";

interface FormCallValues {
  name: string;
  phone: string;
  message: string;
  company?: string;
}

const myKeyRECAPTCHA = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export default function Contact() {
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const initialFormCallValues: FormCallValues = {
    name: "",
    phone: "+380",
    message: "",
  };

  const CallSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Ім'я має містити щонайменше 3 літери")
      .required("Поле ім'я є обов’язковим"),
    phone: Yup.string()
      .matches(/^\+380\d{9}$/, "Номер повинен бути у форматі +380XXXXXXXXX")
      .required("Номер телефону обов'язковий"),
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
      type: "Замовити дзвінок",
      name: values.name,
      phone: values.phone,
      product: "Відсутній",
      message: values.message,
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

      toast.success("Дякуємо! Ми вам зателефонуємо.");
      actions.resetForm();
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
    } catch (err) {
      console.error(err);
      toast.error("Сталася помилка при надсиланні. Спробуйте пізніше.");
    }

  };

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  return (
    <section className={css.contact} id="contacts">
      <Toaster position="top-center" />
      <div className={css.container}>
        <h3 className={css.title}>контакти</h3>
        <div className={css.information}>
          <div className={css.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d857.8360467228931!2d24.058430912699926!3d49.8874692285935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sru!2sfr!4v1753213617234!5m2!1sru!2sfr"
              width={575}
              height={350}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className={css.contactForm}>
            <Formik
              initialValues={initialFormCallValues}
              onSubmit={handleSubmit}
              validationSchema={CallSchema}
            >
              {({ isValid, dirty }) => (
                <Form className={css.form}>
                  <input
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

                  <div className={css.formGroup}>
                    <Field
                      id="name"
                      type="text"
                      name="name"
                      className={css.inputName}
                      placeholder="введіть ІМ'Я"
                    />
                    <ErrorMessage
                      name="name"
                      component="span"
                      className={css.errorName}
                    />
                  </div>

                  <div className={css.formPhone}>
                    <Field
                      id="phone"
                      type="text"
                      name="phone"
                      className={css.inputPhone}
                      placeholder="+380"
                      maxLength={13}
                    />
                    <ErrorMessage
                      name="phone"
                      component="span"
                      className={css.errorPhone}
                    />
                  </div>

                  <div className={css.formGroup}>
                    <Field
                      id="message"
                      name="message"
                      className={css.inputMessage}
                      placeholder="Введіть Ваше повідомлення"
                    />
                    <ErrorMessage
                      name="message"
                      component="span"
                      className={css.ErrorMessage}
                    />
                  </div>
                  {isValid && dirty && (
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={myKeyRECAPTCHA || ""}
                      onChange={(token) => {
                        setRecaptchaToken(token);
                      }}
                    />
                  )}

                  <button
                    className={css.btnContact}
                    type="submit"
                    disabled={!(isValid && dirty && recaptchaToken)}
                  >
                    <span className={css.btnContactSpan}>
                      замовити дзвінок
                      <PhoneCall className={css.iconPhone} />
                    </span>
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <address className={css.details}>
          <ul className={css.addressList}>
            <li className={css.addressItem}>
              <PhoneCall className={css.iconAddressPhone} size={42} />
              <a href="tel:+380989136599" className={css.addressPhone}>
                +380989136599
              </a>
            </li>
            <li className={css.addressItem}>
              <svg className={css.iconEmail} width={42} height={42}>
                <use href="/icons/sprite.svg#icon-email"></use>
              </svg>
              <a href="mailto:firesi@gmail.com" className={css.addressMail}>
                Firesi@gmail.com
              </a>
            </li>
            <li className={css.addressItem}>
              <TbTruckDelivery className={css.iconAddressDelivery} size={42} />
              <p className={css.addressDeliveryText}>доставка Meest, SAT</p>
            </li>
            <li className={css.addressItem}>
              <LiaMapMarkedAltSolid
                className={css.iconAddressLocation}
                size={42}
              />
              <p className={css.addressLocationText}>
                21 Zhovkivska Street, Malekhiv. <br />
                Lviv, Ukraine.
              </p>
            </li>
          </ul>
        </address>
      </div>
    </section>
  );
}
