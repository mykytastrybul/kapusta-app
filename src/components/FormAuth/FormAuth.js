import React from 'react';
import { Field, Form, Formik } from 'formik';
import s from './FormAuth.module.scss';

const FormAuth = () => {
  return (
    <div className={s.wrapper}>
      <p className={s.text}>
        Вы можете авторизоваться с помощью Google Account:
      </p>
      <button className={s.button}>Google</button>
      <p className={s.text}>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </p>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={async values => {
          console.log(values);
        }}
      >
        <Form>
          <label>
            Электронная почта:
            <Field name="email" placeholder="your@email.com" />
          </label>

          <label>
            Пароль:
            <Field name="password" />
          </label>

          <button className={`${s.button} ${s.primary}`} type="submit">
            ВОЙТИ
          </button>
          <button className={`${s.button} ${s.secondary}`} type="submit">
            РЕГИСТРАЦИЯ
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormAuth;
