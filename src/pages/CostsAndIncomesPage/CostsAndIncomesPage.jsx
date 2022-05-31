import React from 'react';
import Balance from '../../components/Balance/Balance';
import CostsAndIncomesBox from '../../components/CostsAndIncomesBox/CostsAndIncomesBox';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import CostsAndIncomesForm from '../../components/CostsAndIncomesBox/CostsAndIncomesForm/CostsAndIncomesForm';
import { NavLink } from 'react-router-dom';

const CostsAndIncomesPage = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const location = useLocation();
  const showSuitableBox = () => {
    switch (location.pathname) {
      case '/balance':
        return (
          <>
            <Balance />
            <CostsAndIncomesBox />
          </>
        );
        case '/expenses':
          if (isMobile) {
            return (
              <> <NavLink to="/balance"><div>Back</div></NavLink>
                <CostsAndIncomesForm />
                {/* <CostAndIncomesButtons /> */}
              </>
            );
          } return;
       
      case '/incomes':
        if (isMobile) {
          return (
            <>
            <NavLink to="/balance"><div>Back</div></NavLink>
              <CostsAndIncomesForm />
              {/* <CostAndIncomesButtons /> */}
            </>
          );
        } return;

        default:
          break;
       
    }
  };

  return (
    <section className={'page'}>
      {!isMobile && (
        <>
          <Balance />
          <CostsAndIncomesBox />
        </>
      )}

      {showSuitableBox()}
    </section>
  );
};

export default CostsAndIncomesPage;
