import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import PageWrapper from "../PageWrapper";

import PricingPage from "../views/Pages/PricingPage";
import Footer from "../components/Footer/Footer.js";
import AuthNavbar from "../components/Navbars/AuthNavbar";
// import CustomizedSnackbars from "../components/Snack";

import styles from "../../public/assets/jss/material-dashboard-pro-react/layouts/authStyle.js";
const getBgImage = "static/img/login.jpeg";
const useStyles = makeStyles(styles);

function Index() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <AuthNavbar brandText="Progressnet Demo" />
      <div
        className={classes.fullPage}
        style={{ backgroundImage: `url( ${getBgImage} )` }}
      >
        {/* <CustomizedSnackbars /> */}

        <PricingPage />
        {/* <Switch>{this.getRoutes(routes)}</Switch> */}
        <Footer fluid />
      </div>
    </div>
  );
}

export default PageWrapper(Index);
