import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { container, heading, navLinks, navLinkItem, navLinkText } from './layout.module.css';

const Layout = ({ pageTitle, pageHeading, children }) => {
    return (
        <div className = {container}>
            <title>{pageTitle}</title>
            <main>
                <h1 className={heading} >
                <StaticImage 
                    src = '../images/icon.png'
                    alt = 'Icon'
                    width = '40'
                    height = '40'
                />  {pageHeading}</h1>
                <nav>
                    <ul className={navLinks} >
                        <li className={navLinkItem}>
                            <Link to='/' className={navLinkText}>
                                Home
                            </Link>
                        </li>

                        <li className={navLinkItem}>
                            <Link to='/about' className={navLinkText}>
                                About
                            </Link>
                        </li>

                        <li className={navLinkItem}>
                            <Link to='/contact' className={navLinkText}>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </nav>
                {children}
            </main>
        </div>
    );
};

export default Layout;