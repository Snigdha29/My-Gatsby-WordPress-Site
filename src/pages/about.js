import * as React from 'react';
import Layout from '../components/layout';

const About = () => {
    return (
        <Layout 
        pageTitle = 'About Us' 
        pageHeading = 'This is our About Page.' 
        > 
            <p>We are building a page using Gatsby.</p>
        </Layout>
    );
};

export default About;