import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

function AboutPage() {
  return (
    <Layout pageTitle="About Me">
      <p>
      <StaticImage
        alt="Main Page"
        src="https://picsum.photos/id/1013/500/300"
      />
        Hi I'm Back-end Developer hyosun Lee. <br/>
        Welcome to my blog
      </p>
    </Layout>
  );
}

export default AboutPage;