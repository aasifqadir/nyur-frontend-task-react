import { useState } from "react";
import Dashboard from "./Dashboard";
import LoginPage from "./LoginPage";
const LandingPage = () => {

    const [loggedInName, setLoggedInName] = useState("");

    const handleLogin = (name) => {
        setLoggedInName(name);
    };
    return (
        <div>
            {loggedInName ? (
                <Dashboard name={loggedInName} />
            ) : (
                <LoginPage onLogin={handleLogin} />
            )}
        </div>
    );
}

export default LandingPage;