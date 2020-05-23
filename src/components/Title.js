import React from "react";
import { Helmet } from "react-helmet";

const TitleComponent = ({ title }) => {
  var defaultTitle = "TuneCache";
  return (
    <Helmet>
      <title>{title ? defaultTitle + " - " + title : defaultTitle}</title>
    </Helmet>
  );
};

export default TitleComponent;
