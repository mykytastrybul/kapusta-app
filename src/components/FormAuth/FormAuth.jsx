import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import sprite from '../../assets/images/symbol-defs.svg';
import { useDispatch } from 'react-redux';
import { loginUser, registerUser } from '../../redux/auth/authOperations';
import s from './FormAuth.module.scss';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('невалидный email')
    .min(3, 'минимальное количество символов 3')
    .max(254, 'максимальное количество символов 254')
    .required('это обязательное поле'),
  password: Yup.string()
    .min(8, 'пароль должен иметь минимум  8 символов')
    .max(100, 'пароль должен иметь максимум 100 символов')
    .required('это обязательное поле'),
});

const FormAuth = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState('login');

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={s.wrapper}
    >
      <p className={s.text}>
        Вы можете авторизоваться с помощью Google Account:
      </p>
      <a
        className={`${s.button} ${s.google}`}
        href="https://kapusta-backend.goit.global/auth/google"
      >
        <svg className={s.icon}>
          <use href={`${sprite + '#icon-google'}`}></use>
        </svg>
        Google
      </a>
      <p className={s.text}>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </p>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          if (type === 'login') {
            dispatch(loginUser(values));
            resetForm();
          }
          if (type === 'register') {
            dispatch(registerUser(values));
            resetForm();
          }
        }}
      >
        {formik => (
          <Form className={s.form}>
            <label className={s.field}>
              {formik.touched.email && formik.errors.email && (
                <span className={s.requiredStar}>*</span>
              )}
              Электронная почта:
              <Field
                className={s.input}
                name="email"
                placeholder="your@email.com"
              />
              {formik.touched.email && formik.errors.email && (
                <span className={s.error}>{formik.errors.email}</span>
              )}
            </label>

            <label className={s.field}>
              {formik.touched.password && formik.errors.password && (
                <span className={s.requiredStar}>*</span>
              )}
              Пароль:
              <Field
                className={`${s.input} ${s.password}`}
                name="password"
                type="password"
              />
              {formik.touched.password && formik.errors.password && (
                <span className={s.error}>{formik.errors.password}</span>
              )}
            </label>

            <div className={s['wrapper-buttons']}>
              <button
                className={`${s.button} ${s.primary}`}
                type="button"
                onClick={() => {
                  setType('login');
                  formik.handleSubmit();
                }}
              >
                ВОЙТИ
              </button>
              <button
                type="button"
                className={`${s.button} ${s.secondary}`}
                onClick={() => {
                  setType('register');
                  formik.handleSubmit();
                }}
              >
                РЕГИСТРАЦИЯ
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </motion.div>
  );
};

export default FormAuth;
