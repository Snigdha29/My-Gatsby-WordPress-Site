import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout';

const Blog = ({data}) => {
    return (
    <Layout pageTitle = 'Blog'> 
        <p>This is our blog.</p>
        <ul>
        {
            data.allFile.nodes.map(node => (
                <li key={node.name}>
                    {node.name}
                </li>
            ))
        }
        </ul>
    </Layout>
    );
};

export const query = graphql`
    query GetBlogs {
        allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
            nodes {
                name
            }
        }
    }
`;

export default Blog;