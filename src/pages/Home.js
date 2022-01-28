import React from "react";
import { Helmet } from "react-helmet";

import IncrementComponent from "../components/IncrementComponent.js";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>HOME - rh</title>
                <meta
                    name="description"
                    content="/ iK meta description working"
                />
                <meta name="keyword" content="HOME meta keyword working" />
            </Helmet>
            <>
                <h1>iK I am Home page</h1>;
                <IncrementComponent />
            </>
        </>
    );
};

export default Home;
