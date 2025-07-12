

// src/components/Auth/Login.jsx
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import loginImg from "../../assets/Images/loginImg.webp";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetStage, setResetStage] = useState('request'); // 'request', 'verify', 'success'
  const [resetEmail, setResetEmail] = useState('');
  const [resetToken, setResetToken] = useState('');
  const [resetMessage, setResetMessage] = useState('');
  
  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', values);
      login(res.data.token);
      navigate('/');
    } catch (err) {
      setErrors({ server: err.response?.data?.msg || 'Login failed' });
    } finally {
      setSubmitting(false);
    }
  };

  const handleForgotPassword = async (values, { setSubmitting, setErrors }) => {
    try {
      if (resetStage === 'request') {
        const res = await axios.post('http://localhost:5000/api/auth/forgot-password', {
          email: values.email
        });
        setResetEmail(values.email);
        setResetToken(res.data.resetToken);
        setResetStage('verify');
        setResetMessage('Please check your email for reset instructions');
      } else if (resetStage === 'verify') {
        await axios.post('http://localhost:5000/api/auth/reset-password', {
          token: values.token || resetToken,
          newPassword: values.newPassword
        });
        setResetStage('success');
        setResetMessage('Password reset successful! You can now log in with your new password.');
      }
    } catch (err) {
      setErrors({ server: err.response?.data?.msg || 'Password reset failed' });
    } finally {
      setSubmitting(false);
    }
  };
  
  // Schema for forgot password
  const forgotPasswordSchema = resetStage === 'request' 
    ? Yup.object({
        email: Yup.string()
          .email('Invalid email address')
          .required('Email is required'),
      })
    : Yup.object({
        token: resetToken ? Yup.string() : Yup.string().required('Reset token is required'),
        newPassword: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('New password is required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
          .required('Confirm password is required'),
      });
  
  const renderForgotPasswordForm = () => {
    if (resetStage === 'success') {
      return (
        <div className="text-center p-6 bg-green-900/30 border border-green-800 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-green-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-xl font-medium text-white mb-2">Password Reset Complete</h3>
          <p className="text-gray-300 mb-4">{resetMessage}</p>
          <button
            onClick={() => {
              setShowForgotPassword(false);
              setResetStage('request');
            }}
            className="w-full py-3 bg-[#d16439] hover:bg-[#b14e27] text-white rounded-lg transition-colors"
          >
            Return to Login
          </button>
        </div>
      );
    }

    return (
      <div>
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#d16439]/10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#d16439]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-[#d16439]">
            {resetStage === 'request' ? 'Reset Password' : 'Set New Password'}
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            {resetStage === 'request' 
              ? 'Enter your email to receive password reset instructions' 
              : 'Enter your reset token and create a new password'}
          </p>
        </div>
        
        <Formik
          initialValues={
            resetStage === 'request'
              ? { email: '' }
              : { token: resetToken || '', newPassword: '', confirmPassword: '' }
          }
          validationSchema={forgotPasswordSchema}
          onSubmit={handleForgotPassword}
        >
          {({ isSubmitting, errors }) => (
            <Form className="space-y-6">
              {resetStage === 'request' ? (
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">Email</label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                    </div>
                    <Field 
                      name="email" 
                      type="email" 
                      className="block w-full rounded-lg border border-gray-700 bg-[#2a2a2a] p-4 pl-10 text-white placeholder-gray-500 focus:border-[#d16439] focus:outline-none focus:ring-1 focus:ring-[#d16439]"
                      placeholder="your@email.com"
                    />
                  </div>
                  <ErrorMessage name="email" component="div" className="mt-1 text-sm text-red-400" />
                </div>
              ) : (
                <>
                  {!resetToken && (
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-300">Reset Token</label>
                      <Field 
                        name="token" 
                        type="text" 
                        className="block w-full rounded-lg border border-gray-700 bg-[#2a2a2a] p-4 text-white placeholder-gray-500 focus:border-[#d16439] focus:outline-none focus:ring-1 focus:ring-[#d16439]"
                        placeholder="Paste your reset token here"
                      />
                      <ErrorMessage name="token" component="div" className="mt-1 text-sm text-red-400" />
                    </div>
                  )}
                  
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">New Password</label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <Field 
                        name="newPassword" 
                        type="password" 
                        className="block w-full rounded-lg border border-gray-700 bg-[#2a2a2a] p-4 pl-10 text-white placeholder-gray-500 focus:border-[#d16439] focus:outline-none focus:ring-1 focus:ring-[#d16439]"
                        placeholder="••••••••"
                      />
                    </div>
                    <ErrorMessage name="newPassword" component="div" className="mt-1 text-sm text-red-400" />
                  </div>
                  
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">Confirm Password</label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <Field 
                        name="confirmPassword" 
                        type="password" 
                        className="block w-full rounded-lg border border-gray-700 bg-[#2a2a2a] p-4 pl-10 text-white placeholder-gray-500 focus:border-[#d16439] focus:outline-none focus:ring-1 focus:ring-[#d16439]"
                        placeholder="••••••••"
                      />
                    </div>
                    <ErrorMessage name="confirmPassword" component="div" className="mt-1 text-sm text-red-400" />
                  </div>
                </>
              )}
              
              {errors.server && (
                <div className="rounded-lg border border-red-800 bg-red-900/30 p-4 text-center text-red-300">
                  {errors.server}
                </div>
              )}

              {resetMessage && !errors.server && (
                <div className="rounded-lg border border-green-800 bg-green-900/30 p-4 text-center text-green-300">
                  {resetMessage}
                </div>
              )}
              
              <div>
                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="group relative flex w-full justify-center rounded-lg bg-gradient-to-r from-[#d16439] to-[#e87b4e] py-4 px-4 text-base font-medium text-white transition-all duration-200 hover:from-[#b14e27] hover:to-[#d16439] focus:outline-none focus:ring-2 focus:ring-[#d16439] focus:ring-offset-2 focus:ring-offset-[#1e1e1e]"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="mr-2 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    resetStage === 'request' ? 'Send Reset Instructions' : 'Reset Password'
                  )}
                </button>
              </div>
            </Form>
          )}
        </Formik>
        
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowForgotPassword(false)}
            className="text-sm font-medium text-[#d16439] hover:text-[#e87b4e] transition-colors"
          >
            Back to Login
          </button>
        </div>
      </div>
    );
  };
  
  const renderLoginForm = () => (
    <div>
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#d16439]/10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#d16439]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-[#d16439]">Welcome Back</h2>
        <p className="mt-2 text-sm text-gray-400">Sign in to continue to your account</p>
      </div>
      
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
          password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        })}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">Email</label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <Field 
                  name="email" 
                  type="email" 
                  className="block w-full rounded-lg border border-gray-700 bg-[#2a2a2a] p-4 pl-10 text-white placeholder-gray-500 focus:border-[#d16439] focus:outline-none focus:ring-1 focus:ring-[#d16439]"
                  placeholder="your@email.com"
                />
              </div>
              <ErrorMessage name="email" component="div" className="mt-1 text-sm text-red-400" />
            </div>
            
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">Password</label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <Field 
                  name="password" 
                  type="password" 
                  className="block w-full rounded-lg border border-gray-700 bg-[#2a2a2a] p-4 pl-10 text-white placeholder-gray-500 focus:border-[#d16439] focus:outline-none focus:ring-1 focus:ring-[#d16439]" 
                  placeholder="••••••••"
                />
              </div>
              <ErrorMessage name="password" component="div" className="mt-1 text-sm text-red-400" />
            </div>
            
            {errors.server && (
              <div className="rounded-lg border border-red-800 bg-red-900/30 p-4 text-center text-red-300">
                {errors.server}
              </div>
            )}
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-700 bg-[#2a2a2a] text-[#d16439] focus:ring-[#d16439]"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                  Remember me
                </label>
              </div>
              
              <div className="text-sm">
                <button 
                  type="button"  
                  onClick={() => setShowForgotPassword(true)}
                  className="font-medium text-[#d16439] hover:text-[#e87b4e]"
                >
                  Forgot password?
                </button>
              </div>
            </div>
            
            <div>
              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="group relative flex w-full justify-center rounded-lg bg-gradient-to-r from-[#d16439] to-[#e87b4e] py-4 px-4 text-base font-medium text-white transition-all duration-200 hover:from-[#b14e27] hover:to-[#d16439] focus:outline-none focus:ring-2 focus:ring-[#d16439] focus:ring-offset-2 focus:ring-offset-[#1e1e1e]"
              >
                {isSubmitting ? (
                  <>
                    <svg className="mr-2 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : 'Sign In'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
      
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-400">
          Don't have an account?{' '}
          <Link to="/signup" className="font-medium text-[#d16439] hover:text-[#e87b4e] transition-colors">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#232323] p-4 text-white">
      <div className="flex w-full max-w-4xl overflow-hidden rounded-2xl shadow-2xl">
        {/* Nature Image Section */}
        <div className="hidden md:block md:w-1/2 bg-cover bg-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a]/30 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <svg className="w-16 h-16 text-white" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 15C30.67 15 15 30.67 15 50C15 69.33 30.67 85 50 85C69.33 85 85 69.33 85 50C85 30.67 69.33 15 50 15ZM50 25C55.52 25 60 29.48 60 35C60 40.52 55.52 45 50 45C44.48 45 40 40.52 40 35C40 29.48 44.48 25 50 25ZM50 75C42.5 75 35.73 71.31 31.46 65.43C31.6 57.71 47.14 53.5 50 53.5C52.86 53.5 68.4 57.71 68.54 65.43C64.27 71.31 57.5 75 50 75Z" fill="currentColor"/>
              </svg>
            </div>
          </div>
          <LazyLoadImage
            src={loginImg}
            alt="Login Image"
            effect="blur"
            className="h-full w-full object-cover"
          />
        </div>
        
        {/* Form Section */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-[#1e1e1e] to-[#212121] p-8 md:p-12">
          {showForgotPassword ? renderForgotPasswordForm() : renderLoginForm()}
        </div>
      </div>
    </div>
  );
};

export default Login;