import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { SidenavData } from "./SidenavData";

function Sidenav() {
  const [sidebar, setSidebar] = useState(false);
  const toggleSide = () => setSidebar(!sidebar);
  return (
    <>
      {" "}
      <div className="nav-toggler">
        <Link to="#">
          <FaIcons.FaBars onClick={toggleSide} />
        </Link>
      </div>
      {sidebar ? (
        <nav className="nav-menu">
          <ul className="nav-menu-items">
            <li className="navbar-brand">
              <Link className="brand" to="/">
                Photoshock
              </Link>
            </li>

            {SidenavData.map((item, index) => {
              return (
                <li key={index} className={item.className} onClick={toggleSide}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : (
        ""
      )}
    </>
  );
}

export default Sidenav;
