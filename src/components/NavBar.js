import React, { Component } from "react";
import "./NavBar.css";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { ButtonContainer } from "./Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faCartPlus } from "@fortawesome/free-solid-svg-icons";

export default class NavBar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <FontAwesomeIcon
            icon={faMobile}
            style={{
              fontSize: "2.5rem",
              color: "var(--lightBlue)",
              marginTop: "0",
            }}
          />
        </Link>

        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>

        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <FontAwesomeIcon icon={faCartPlus} />
              my cart
            </span>
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
    padding: 35%;
  }
`;
