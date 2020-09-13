import "antd/dist/antd.css";
import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import Definer from "./pages/definer/definer.component";
import Home from "./pages/home/home.component";
import { setCurrentUser } from "./redux/user/user.actions";
import Header from "./shared/header/header.component";
import Sidebar from "./shared/sidebar/sidebar.component";
import { setCategories } from "./redux/definer/definer.actions";
import { createCategories } from "./pages/definer/services/definer.servics";

class App extends React.Component {
  toggleSidebar(isOpen) {
    this.setState({ ...this.state, isSidebarOpen: isOpen });
  }

  closeSidebar() {
    this.setState({ ...this.state, isSidebarOpen: false });
  }

  unsubscribeFromAuth;

  componentDidMount() {
    const { setCurrentUser, setCategories } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          let userData = snapshot.data();

          setCurrentUser({
            id: snapshot.id,
            displayName: userData.displayName,
            email: userData.email,
            photoURL: userData.photoURL,
            createdAt: userData.createdAt,
            categories: userData.categories,
          });

          setCategories(createCategories(userData.categories ?? []));
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Sidebar />
          <Switch>
            <Route path="/definer">
              <Definer />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  setCategories: (categories) => dispatch(setCategories(categories)),
});
export default connect(null, mapDispatchToProps)(App);
