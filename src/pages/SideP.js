import React from "react";
import { Helmet } from "react-helmet";

const Side = () => (
    <>
        <Helmet>
            <meta
                name="description"
                content="/side iK meta description working"
            />
            <meta name="keyword" content="SIDE meta keyword working" />
            <title>SIDE - rh</title>
        </Helmet>
        <div>iK I am side page</div>;
    </>
);

export default Side;
