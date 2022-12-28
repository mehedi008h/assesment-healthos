import React from "react";
import { Auth } from "../components";

const Signup = () => {
    return (
        <div>
            <Auth
                title="Signup"
                link="login"
                linkText="Login"
                login={false}
                text="Already have an account?"
            />
        </div>
    );
};

export default Signup;
