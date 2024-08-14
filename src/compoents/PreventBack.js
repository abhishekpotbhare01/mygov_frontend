import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export function PreventBack() {
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        // Function to prevent navigation back
        const preventBack = () => {
            navigate(location.pathname, { replace: true });
        };

        // Add a popstate event listener
        window.addEventListener("popstate", preventBack);

        // Immediately redirect to the current path to prevent back navigation
        navigate(location.pathname, { replace: true });

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("popstate", preventBack);
        };
    }, [navigate, location]);

    return null; // This component doesn't need to render anything
}