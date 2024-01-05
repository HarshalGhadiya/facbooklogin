import React, { useRef } from 'react';
import { LoginSocialFacebook } from 'reactjs-social-login';
import {
    FacebookLoginButton
} from "react-social-login-buttons";

const SocialLogin = () => {
    const facebookRef = useRef();
    const responseFacebook = (response) => {
        console.log(response, 'response');
        // Handle the response from Facebook login here
        // You might want to send the `response.accessToken` to your server for further authentication
    };

    return (
        <div>
            <LoginSocialFacebook
                ref={facebookRef}
                appId={"708913134704269"}
                // onLoginStart={onLoginStart}
                // onLogoutSuccess={onLogoutSuccess}
                onResolve={({ provider, data }) => {
                    console.log(data, "data");
                    console.log(provider, "provider");
                }}
                onReject={(err) => {
                    console.log(err);
                }}
            >
                <FacebookLoginButton />
            </LoginSocialFacebook>
        </div>
    );
};

export default SocialLogin;
