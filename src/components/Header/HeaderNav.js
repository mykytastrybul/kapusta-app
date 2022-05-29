import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import logo from '../../assets/images/nav/logo.svg';
import logout_header from '../../assets/images/nav/logout_header.svg';
import { logoutUser } from '../../redux/auth/authOperations';
function HeaderNav() {
  const username = useSelector(state => state.auth.user.email);
  const dispatch = useDispatch();
  const logoutButtonHandler = () => {
    dispatch(logoutUser());
  };
  const isAuth = useSelector(state => Boolean(state.auth.token));
  const isFullView = useMediaQuery({ query: '(min-width:768px' });
  return (
    <>
      <div className="container_nav">
        <img src={logo} alt="logo"></img>

        {isAuth ? (
          <>
            <div className="login_part">
              <div className="circle_name">{username.charAt(0)}</div>
              {isFullView ? (
                <>
                  <span className="login_part__user_name">{username}</span>
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
