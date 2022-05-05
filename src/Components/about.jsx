import React, { Component } from "react";

import { Link, Route, Routes,Outlet } from "react-router-dom";
import Team from './team';
import Company from './Company';
class About extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>This is About page</h1>
        <div className="row">
          <div className="col-3">
            <ul>
              <li>
                <Link to="/about/team">Our Team</Link>
              </li>
              <li>
                <Link to="/about/company">Our Company</Link>
              </li>
            </ul>
          </div>
          <div className="col">
              <Routes>
                  <Route path="team" element = {(<><Team></Team><Outlet /></> )} />
                  <Route path="company" element = {(<><Company></Company><Outlet /></> )} />
              </Routes>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
