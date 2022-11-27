import React, { useState } from 'react';
import { useAuth } from '../../core';
import { LoginForm } from './login-form';

export const Login = () => {
  const { signIn, skipLogin } = useAuth();

  const onSubmit = (data) => {
    console.log("In onSubmit ", data);
    signIn({ access: 'access-token', refresh: 'refresh-token' });
  };

  return <LoginForm onSubmit={onSubmit} onSkip={skipLogin}/>;
};