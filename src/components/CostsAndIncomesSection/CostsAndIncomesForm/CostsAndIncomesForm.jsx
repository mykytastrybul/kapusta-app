import styles from './CostsAndIncomesForm.module.css'

const CostsAndIncomesForm = () => {
    return (
        <form action="submit" className={styles.form}>
            <label htmlFor="date"></label>
        <input
          className={styles['input-date']}
          type="date"
          name="date"
          required
        //   value={name}
        //   onChange={handleChange}
        />
        <label htmlFor="item"></label>
        <input
          className={styles['input-item']}
          type="text"
          name="item"
          placeholder='Описание товара'
        //   value={number}
        //   onChange={handleChange}
        />
         <label htmlFor="category"></label>
        <input
          className={styles['input-category']}
          type="text"
          name="category"
          placeholder='Категория товара'
        //   value={number}
        //   onChange={handleChange}
        />

         <label htmlFor="cost"></label>
        <input
          className={styles['input-cost']}
          type="number"
          name="cost"
          placeholder='00.00'
        //   value={number}
        //   onChange={handleChange}
        />
        
        <button type="submit" className={styles.button}>
          Ввести
        </button>
        <button type="button" className={styles.button}>
          Очистити
        </button>
        </form>
    )
}

export default CostsAndIncomesForm;