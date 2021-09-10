import React from 'react';
import {Link} from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
    <Main
        description={"Shawrup's personal website. Dhaka Based Software Engineer. BUET Alumni."}
    >
        <article className="post" id="index">
            <header>
                <div className="title">
                    <h2 data-testid="heading"><Link to="/">I'm not a great programmer; I'm just a good programmer with great habits. </Link></h2>
                    <p> - Kent Beck</p>
                </div>
            </header>
            <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
                or you can check out my {' '}
                <Link to="/resume">resume</Link>, {' '}
                <Link to="/projects">projects</Link>, {' '}
                or <Link to="/contact">contact</Link> me.
            </p>
        </article>
    </Main>
);

export default Index;
