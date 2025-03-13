import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contacts = () => {
  return (
    <div>
      <h1>Contact Us!</h1>
      <table className="table">
        <tr>
          <td width={250}>
            <ul>
              <li>
                <Link to="gurugram">Gurugram</Link>
              </li>
              <li>
                <Link to="mumbai">Mumbai</Link>
              </li>
              <li>
                <Link to="bangalore">Bangalore</Link>
              </li>
            </ul>
          </td>

          <td>
            <Outlet />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Contacts;
