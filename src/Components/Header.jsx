import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Header = () => {
   const {user, dispatch} = useContext(AuthContext)
   const logoutHandler = () => {
      dispatch({type : "LOGOUT_SUCCESS"})
   }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="https://www.achieversit.com/assets/images/logo-white.png" alt="AIT" className="w-50"/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/createblog" className="nav-link">
                CreateBlog
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            {
              user ? 
              <div>
                <Link>
                  <button className="btn btn-outline-danger me-2" onClick={logoutHandler}>
                    Logout
                  </button>
                </Link>
                <Link>
                  <img src={user.profilePicture} alt={user.userName} className="img-fluid rounded" style={{width:"30px"}}/>
                </Link>
                <Link>
                 <h6>{user.userName}</h6>
                </Link>
              </div> : 
              <div>
                <Link to="/login">
              <button className="btn btn-outline-dark me-2" type="submit">
              Login
            </button>
            </Link>
            <Link to="/register">
              <button className="btn btn-outline-success" type="submit">
              Register
            </button>
            </Link>
              </div>
            }
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
