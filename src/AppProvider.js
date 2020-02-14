import React, { createContext, useState, useEffect } from "react";
import differenceInCalendarDays from "date-fns/differenceInCalendarDays";
import Router from "next/router";
import fetch from "isomorphic-unfetch";
import { Config } from "./config";
import jsCookie from "js-cookie";
// import { Config } from "./config";

const { Provider, Consumer } = createContext();

// Then create a provider Component
function AppProvider(props) {
  const [snackOpen, setSnackOpen] = useState(false);
  const [notify, setNotify] = useState({
    place: "bc",
    message: "<div></div>",
    type: "info",
    icon: "now-ui-icons ui-1_bell-53",
    autoDismiss: 6000
  });
  
  
 
  const snackNotify = (color, msg) => {
    console.log(msg);
    let type = "";
    switch (color) {
      case 201:
        type = "info";
        break;
      case 200:
        type = "success";
        break;
      case 422:
        type = "error";
        break;
      case 401:
        type = "error";
        break;
      case 404:
        type = "warning";
        break;

      default:
        type = "info";
        break;
    }
    let options = {};

    options = {
      place: "bc",
      message: <div>{msg}</div>,
      type: type,
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 6000
    };
    setNotify(options);
  };

  const handleSnackOpen = () => {
    setSnackOpen(true);
  };

  return (
    <Provider
      value={{
        notify,
        snackOpen,

      }}
    >
      {props.children}
    </Provider>
  );
}

export { AppProvider };
export default Consumer;
