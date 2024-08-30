import React from "react";
import { Helmet } from "react-helmet";
const Seo = ({ headTitle, title, type, description }) => {
  return (
    <Helmet>
      <title>UTSMS | {headTitle}</title>
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={"https://utsmuslim.pages.dev/"} />
    </Helmet>
  );
};

export default Seo;
