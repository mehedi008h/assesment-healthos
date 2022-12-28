import React from "react";
import { Auth } from "../components";

const Login = () => {
    return (
        <div>
            <Auth
                title="Login"
                link="signup"
                linkText="Signup"
                login={true}
                text="Don't have an account?"
            />
        </div>
    );
};

export default Login;
