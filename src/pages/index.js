
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <img src={'https://mblogthumb-phinf.pstatic.net/MjAyMDA3MjBfMjM2/MDAxNTk1MTk1MTg2MTEz.5YYUfm9wE0IZ_ErObyab4YFQ3PLZz_UDFRpv1kY7s7Yg.suv2K4NSn2R-NCIYGBjERF5lROx_JFHfYlxBj8g2Yrog.GIF.lhj08152002/1595195184174.GIF?type=w800'} alt="main" />
      <p>This is developer blog.</p>
    </Layout>
  );
};

export default IndexPage;