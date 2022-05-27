import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import sprite from '../../assets/images/symbol-defs.svg';
import s from './FormAuth.module.scss';
import { useDispatch } from 'react-redux';
import { loginUser, registerUser } from '../../redux/auth/authOperations';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('невалидный email')
    .min(3, 'Минимальное количество символов 3')
    .max(254, 'Максимальное количество символов 254')
    .required('Обязательное поле'),
  password: Yup.string()
    .min(8, 'Пароль должен иметь минимум  8 символов')
    .max(100, 'Пароль должен иметь максимум 100 символов')
    .required('Обязательное поле'),
});

const FormAuth = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState('login');

  return (
    <div className={s.wrapper}>
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
            console.log('logging...', values);
            dispatch(loginUser(values));

            resetForm();
          }
          if (type === 'register') {
            console.log('registering...', values);
            dispatch(registerUser(values));
          }
        }}
      >
        {formik => (
          <Form className={s.form}>
            <label className={s.field}>
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
    </div>
  );
};

export default FormAuth;
