import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Projects() {
  return (
    <div>
      <div className="cotaine">
        <div className="row">
          <div className="col-md-1">
            <ul>
              <li>
                <Link to="web">Web</Link>
              </li>
              <li>
                <Link to="mobile">Mobile</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-9">
            <Outlet></Outlet>
          </div>
          <div className="col-md-2">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, facere!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
