// hooks/usePreviousLocation.js
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const usePreviousLocation = () => {
  const location = useLocation();
  const prevLocationRef = useRef(null);

  useEffect(() => {
    prevLocationRef.current = location;
  }, [location]);

  return prevLocationRef.current;
};

export default usePreviousLocation;
