import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, Button } from 'react-bootstrap';
import './App.css';
import HomePage from "../src/Pages/HomePage";
import SingleSkillPage from "../src/Pages/SingleSkillPage";

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <Router>
        <div>
          <Navbar fluid>
            <Navbar.Header>
              <Button
                bsStyle="primary"
                className="btn-margin"
                onClick={this.goTo.bind(this, 'home')}
              >
                Home
              </Button>
              {
                !isAuthenticated() && (
                    <Button
                      id="qsLoginBtn"
                      bsStyle="primary"
                      className="btn-margin"
                      onClick={this.login.bind(this)}
                    >
                      Log In
                    </Button>
                  )
              }
              {
                isAuthenticated() && (
                    <Button
                      id="qsLogoutBtn"
                      bsStyle="primary"
                      className="btn-margin"
                      onClick={this.logout.bind(this)}
                    >
                      Log Out
                    </Button>
                  )
              }
            </Navbar.Header>
          </Navbar>
          <Switch>
            {/* Skill routing causing single skill page to appear on homepage */}
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home" component={HomePage} />
            {/* <Route path="/:skill" component={SingleSkillPage} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
