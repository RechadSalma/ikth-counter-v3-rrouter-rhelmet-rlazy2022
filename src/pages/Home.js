import React, { Suspense, lazy } from "react";
import { Helmet } from "react-helmet";

const IncrementComponent = lazy(() =>
    import("../components/IncrementComponent.js")
);

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
                <Suspense fallback={<h1>.LAZY LOADING with reactjs...</h1>}>
                    <IncrementComponent />
                </Suspense>
            </>
        </>
    );
};

export default Home;
