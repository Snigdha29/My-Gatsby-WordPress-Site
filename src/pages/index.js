import * as React from "react";
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image'

const HomePage = ()=> {
  return (
    <Layout 
        pageTitle = 'Home' 
        pageHeading = 'This is our Home Page.' 
        > 
        <p>Hey there!
        </p>
        <StaticImage 
          alt='lifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera'
          src='https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large'
          placeholder='blurred'
        />
    </Layout>
  );
};

export default HomePage;