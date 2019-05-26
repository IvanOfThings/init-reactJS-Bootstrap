import React, { Component } from 'react';
import Sidebar from './components/sidebar/Sidebar'
import ScrollToTop from './components/ScrollToTop'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Content from './pages/Content';
import Dashboard from './pages/Dashboard';
import Charts from './pages/Charts';
import NotFound from './pages/NotFound';

class App extends Component {

  render() {

    const titleBar = <div>SB Admin <sup>2</sup></div>;
    return (
      <div className="App" id="wrapper">
        <Sidebar titleBar={titleBar} />
        <Content>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/index" component={Dashboard} />
              <Route exact path="/charts" component={Charts} />
              <Route exact path="/404" component={NotFound} />
            </Switch>
          </BrowserRouter>
        </Content>
        <ScrollToTop reference="#page-top" />
        <div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
              <div className="modal-footer">
                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                <a className="btn btn-primary" href="login.html">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

/*
      */