import React, { useState } from "react";
import "./Navbar.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { IconButton } from "@material-ui/core";


import mobixLogo from '../../images/mobix_logo.png'

export default function Navbar() {
  const [loggedIn, setloggedIn] = useState(true);

  return (
    <div className="nav_component">
      {/* This the uppper part of the NAV */}
      <div className="top_section">
        <div className="row nav_first_row">
          <div class="col-sm-7 col-md-7 col-lg-10 middle_portion">
            <h3>Upto 50% Off on your favourite Brands</h3>
          </div>

          <div class="col-sm-5 col-md-5 col-lg-2 right_portion">
              <IconButton>
                <AccountCircleIcon />
              </IconButton>
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>

            <IconButton>
              <ShoppingCartIcon />
            </IconButton>
          </div>
        </div>
      </div>

      {/* This is the main navbar responsive also. From Bootstrap 4 */}

      <nav className="navbar navbar-expand-lg sticky-top navbar-custom">
        <a className="navbar-brand" href="#">
          <img src={mobixLogo} width="80" alt=""/>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <a className="nav-item nav-link nav-text" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link nav-text" href="#">
              About
            </a>

            <button type="button" className="btn btn-warning ShopNow">Shop Now</button>

          </div>
        </div>
      </nav>
    </div>
  );
}
