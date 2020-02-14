import React from "react";
import Head from "next/head";

const AppHead = props => {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <meta charSet="utf-8" />

        <title>Title</title>
        {/* <meta
            name="theme-color"
            content={pageContext.theme.palette.primary.main}
          /> */}
        <link rel="apple-touch-icon" href="/public/images/homescreen512.png" />
        <meta name="description" content="content description" />
        <meta name="apple-mobile-web-app-title" content="content description" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#2196f3" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css"
        />
        <script src="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.js"></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/jvectormap/2.0.4/jquery-jvectormap.css"
          type="text/css"
          media="screen"
        />
        <link
          rel="stylesheet"
          href="//cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css"
          type="text/css"
          media="screen"
        />
        <link
          href="https://use.fontawesome.com/releases/v5.0.7/css/all.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
        />
        <link rel="manifest" href="/manifest.json" />
        {/* <link
          rel="stylesheet"
          type="text/css"
          href="/public/assets/css/nprogress.css"
        /> */}
        {/* <link
          rel="stylesheet"
          type="text/css"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        /> */}

        {/* <link rel="stylesheet" href="/public/css/demo.css" />
        <link rel="stylesheet" href="/public/css/style.css" /> */}
        {/* <link rel="stylesheet" href="/public/css/paper-dashboard.min.css" /> */}

        <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
        {/* <style dangerouslySetInnerHTML={{ __html: stylesheet }} /> */}
      </Head>
    </div>
  );
};

export default AppHead;
