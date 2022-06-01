import React from 'react';
import { motion } from 'framer-motion';
import FormAuth from '../../components/FormAuth/FormAuth';
import s from './LoginPage.module.scss';

const LoginPage = () => {
  return (
    <section className={s.section}>
      {/* <div className={s.bg}></div> */}
      <div className={s.container}>
        <motion.div
          animate={{ rotate: [0, 5, 0], y: [0, 15, 0] }}
          transition={{ duration: 0.4, delay: 1.5 }}
          className={s['wrapper-title']}
        >
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={s.title}
          >
            {
              <motion.span
                initial={{
                  opacity: 0,
                  top: 0,
                  left: '67%',
                }}
                animate={{ opacity: 1, top: '24%', left: '67%' }}
                transition={{ duration: 0.5, delay: 1 }}
                className={s.square}
              ></motion.span>
            }
            {
              <motion.span
                initial={{
                  opacity: 0,
                  top: '100%',
                  left: '67%',
                }}
                animate={{ opacity: 1, top: '78%', left: '67%' }}
                transition={{ duration: 0.5, delay: 1.35 }}
                className={s.square}
              ></motion.span>
            }
            Kapusta
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={s.text}
          >
            SMART FINANCE
          </motion.p>
        </motion.div>
        <FormAuth />
      </div>
    </section>
  );
};

export default LoginPage;
