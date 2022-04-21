import React from "react";
import Head from "next/head";
import Nav from "./Navbar";

const Layout = (props) => {
  return (
    <>
     <Head>
        <title>Paint io🎨</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <Nav />
      {props.children}
    </>
  );
}

export default Layout;