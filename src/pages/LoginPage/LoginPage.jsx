import React from 'react';
import FormAuth from '../../components/FormAuth/FormAuth';
import s from './Login.module.scss';

const LoginPage = () => {
  return (
    <div className={'page'}>
      <div className={s.container}>
        <div className={s['wrapper-title']}>
          <h1 className={s.title}>Kapusta</h1>
          <p className={s.text}>SMART FINANCE</p>
        </div>
        <FormAuth />
      </div>
    </div>
  );
};

export default LoginPage;
