
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <StaticImage
        alt="Main Page"
        src="https://picsum.photos/id/1013/500/300"
      />
      <p>This is developer blog.</p>
    </Layout>
  );
};

export default IndexPage;