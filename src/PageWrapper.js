/* eslint-disable react/display-name */
import React from "react";
import NProgress from "nprogress";
import Router from "next/router";
import fetch from "isomorphic-unfetch";
import nextCookie from "next-cookies";
import AppHead from "./components/AppHead";
import { Config } from "./config";

import Consumer, { AppProvider } from "./AppProvider";
//import routes from "./routes";
import CustomizedSnackbars from "../src/components/Snack";

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const PageWrapper = Comp =>
  class extends React.Component {
    static async getInitialProps(args) {
      const { slug, apiRoute } = args.query;
      const token = nextCookie(args).token;

      return {
        slug,
        token,
        apiRoute,
        //routes,
        ...(Comp.getInitialProps ? await Comp.getInitialProps(args) : null)
      };
    }

    render() {
      
      return (
        <AppProvider slug={this.props.slug} token={this.props.token}>
          <Consumer>
            {context => {
              return (
                <div>
                  <AppHead
                    msg={context.msg}
                    // settings={this.props.settings}
                    // title={this.props.blogInfo.name}
                    // description={this.props.blogInfo.description}
                  />
                  <CustomizedSnackbars />

                  <Comp
                    {...this.props}
                    selected={context.selected}
                    notifications={context.notifications}
                  />
                </div>
              );
            }}
          </Consumer>
        </AppProvider>
      );
    }
  };

export default PageWrapper;
