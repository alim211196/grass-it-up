import React, { useEffect, useState } from "react";
import SuspenseLoader from "./SuspenseLoader";

const DelayedSuspense = ({ children, minDelay = 5000 }) => {
    const [delayPassed, setDelayPassed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDelayPassed(true);
        }, minDelay);
        return () => clearTimeout(timer);
    }, [minDelay]);

    return delayPassed ? children : <SuspenseLoader />;
};

export default DelayedSuspense;
