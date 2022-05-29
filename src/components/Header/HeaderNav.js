import { useMediaQuery } from 'react-responsive';
import logo from '../../assets/images/nav/logo.svg';
import logout_header from '../../assets/images/nav/logout_header.svg';
function HeaderNav() {
  const logoutButtonHandler = () => {
    console.log('exit pushed');
  };
  const isAuth = true;
  const isFullView = useMediaQuery({ query: '(min-width:768px' });
  return (
    <>
      <div className="container_nav">
        <img src={logo} alt="logo"></img>

        {isAuth ? (
          <>
            <div className="login_part">
              <div className="circle_name">U</div>
              {isFullView ? (
                <>
                  <span className="login_part__user_name">User name</span>
                  <span className="login_part_grey_line"></span>
                </>
              ) : null}
              {isFullView ? (
                <div className="logoutButton_wrapper">
                  <button
                    onClick={logoutButtonHandler}
                    type="button"
                    className="logoutButton"
                  >
                    Выйти
                  </button>
                </div>
              ) : (
                <img
                  className="logout_img"
                  onClick={logoutButtonHandler}
                  src={logout_header}
                  alt="logout"
                ></img>
              )}
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}

export default HeaderNav;
