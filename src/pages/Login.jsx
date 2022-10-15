import React from 'react';
import { useDispatch } from 'react-redux';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { currentUserAction } from '@/redux/actions/currentUserAction'
import { LoginLayout } from '@/layouts/LoginLayout'

export function Login() {
  const dispatch = useDispatch();

  return (
    <LoginLayout>
      <GoogleLogin
        onSuccess={credentialResponse => {
          const userObject = jwt_decode(credentialResponse.credential);
          dispatch(currentUserAction(userObject))
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </LoginLayout>
  );
}

export default Login
