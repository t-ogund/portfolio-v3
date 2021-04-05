import React from "react";
import ReactGA from "react-ga";

const Event = (category, action, label) => {
    ReactGA.event({
      category: category,
      action: action,
      label: label
    });
  };

// const Link = (category, action, label) => 




export default Event;