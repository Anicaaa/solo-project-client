import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Country = () => {
  let navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  });

  return (
    <>
      <div className="country-wrapper">
        <h1 className="country-title">Choose a Country</h1>
        <div className="country-list">
          <ul>
            <h2 className="country-name">Africa</h2>
            <li>Egypt</li>
            <li>South Africa</li>
            <li>Tunisia</li>
          </ul>
          <ul>
            <h2 className="country-name">Asia</h2>
            <li>China</li>
            <li>India</li>
            <li>Japan</li>
            <li>South Korea</li>
            <li>Thailand</li>
          </ul>
          <ul>
            <h2 className="country-name">Europe</h2>
            <li>Austria</li>
            <li>Belgium</li>
            <li>Denmark</li>
            <li>France</li>
            <li>Greece</li>
            <li>Iceland</li>
            <li>Italy</li>
            <li>Norway</li>
            <li>Poland</li>
            <li>Portugal</li>
            <li>Russia</li>
            <li>Spain</li>
            <li>Turkey</li>
            <li>
              {" "}
              <a className="uk-tag" href="/home">
                United Kingdom
              </a>
            </li>
          </ul>
          <ul>
            <h2 className="country-name">Middle East</h2>
            <li>Bahrain</li>
            <li>Jordan</li>
            <li>Qatar</li>
            <li>Saudi Arabia</li>
            <li>United Arab Emirates</li>
          </ul>
          <ul>
            <h2 className="country-name">North and South America</h2>
            <li>Brazil</li>
            <li>Canada</li>
            <li>Colombia</li>
            <li>Mexico</li>
            <li>United States</li>
          </ul>
          <ul>
            <h2 className="country-name">Oceania</h2>
            <li>Australia</li>
            <li>New Zealand</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Country;
