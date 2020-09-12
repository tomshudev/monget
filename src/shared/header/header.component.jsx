import React from "react";
import "./header.styles.scss";
import { connect } from "react-redux";

import { signInWithGoogle } from "../../firebase/firebase.utils";
import { auth } from "../../firebase/firebase.utils";
import { Button } from "@material-ui/core";
import { toggleSidebar } from "../../redux/layout/layout.actions";

function Header({ user, toggleSidebar }) {
  return (
    <div className="header">
      <div className="left">
        <svg
          onClick={() => toggleSidebar(true)}
          className="sidebar-open ignore-alerter"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <span>Hello, {user.displayName}</span>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              onClick={() => auth.signOut()}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            variant="contained"
            color="primary"
            disableElevation
            onClick={signInWithGoogle}
          >
            Login
          </Button>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSidebar: (isOpen) => dispatch(toggleSidebar(isOpen)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
