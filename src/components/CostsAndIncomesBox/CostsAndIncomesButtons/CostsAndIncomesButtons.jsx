import s from './_CostsAndIncomesButtons.module.scss'

const CostAndIncomesButtons = ()=> {
    const isActive = true;
    return(
<div className={s.tracker}>
        <div className={isActive ? s['tracker-tab-active'] : s['tracker-tab']}>
          <a className={isActive ? s['link-active'] : s['link']} href="">
            Витрати
          </a>
        </div>
        <div className={!isActive ? s['tracker-tab-active'] : s['tracker-tab']}>
          <a className={!isActive ? s['link-active'] : s['link']} href="">
            Доходи
          </a>
        </div>
      </div>
    )
}

export default CostAndIncomesButtons;