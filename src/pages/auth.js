import React from "react";
import PropTypes from "prop-types";
import Error from "next/error";
import { makeStyles } from "@material-ui/core/styles";
import PageWrapper from "../PageWrapper";
import AuthNavbar from "../components/Navbars/AuthNavbar";
import Login from "../views/Pages/LoginPage";
import PricingPage from "../views/Pages/PricingPage";
import RegisterPage from "../views/Pages/RegisterPage";
import Footer from "../components/Footer/Footer.js";
import styles from "../../public/assets/jss/material-dashboard-pro-react/layouts/authStyle.js";
import CustomizedSnackbars from "../components/Snack";
const getBgImage = "/static/img/bg-pricing.jpeg";
 
const components = {
  login: Login,
  pricing_page: PricingPage,
  register: RegisterPage
};
const useStyles = makeStyles(styles);

function Auth({ slug }) {
  const classes = useStyles();

  const Tagname = components[slug];

  if (!slug)
    return (
      <div className={classes.wrapper}>
        <CustomizedSnackbars />
        <AuthNavbar brandText={slug} />
        <div
          className={classes.fullPage}
          style={{ backgroundImage: `url( ${getBgImage} )` }}
        >
          <Login />

          {/* <Switch>{this.getRoutes(routes)}</Switch> */}
          {/* <Footer fluid /> */}
        </div>
      </div>
    );
  const isSlug = Object.keys(components).includes(slug);
  if (!isSlug) return <Error statusCode={404} />;

  return (
    <div className={classes.wrapper}>
      <CustomizedSnackbars />
      <AuthNavbar brandText={slug} />
      <div
        className={classes.fullPage}
        style={{ backgroundImage: `url( ${getBgImage} )` }}
      >
        {/* <CustomizedSnackbars /> */}
        <Tagname />

        {/* <Switch>{this.getRoutes(routes)}</Switch> */}
        <Footer fluid />
      </div>
    </div>
  );
}

Auth.propTypes = {
  slug: PropTypes.string.isRequired
};

Auth.getInitialProps = async args => {
  const { slug, apiRoute } = args.query;

  return { apiRoute, slug };
};
export default PageWrapper(Auth);
