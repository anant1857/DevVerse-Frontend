
// // src/components/Auth/Signup.jsx
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// import { useAuth } from '../../context/AuthContext';
// import { Link, useNavigate } from 'react-router-dom';

// const Signup = () => {
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const formik = useFormik({
//     initialValues: { name: '', email: '', password: '' },
//     validationSchema: Yup.object({
//       name: Yup.string().required('Name is required'),
//       email: Yup.string().email('Invalid email').required('Email is required'),
//       password: Yup.string().min(6).required('Password is required'),
//     }),
//     onSubmit: async (values, { setSubmitting, setErrors }) => {
//       try {
//         const res = await axios.post('https://devguardian-backend.onrender.com/api/auth/signup', values);
//         login(res.data.token);
//         navigate('/');
//       } catch (err) {
//         setErrors({ email: err.response?.data?.msg || 'Signup failed' });
//       } finally {
//         setSubmitting(false);
//       }
//     },
//   });

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#232323] text-white">
//       <div className="bg-[#1e1e1e] p-8 rounded-xl shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold text-primary mb-6">Create an Account</h2>
//         <form onSubmit={formik.handleSubmit} className="space-y-4">
//           <div>
//             <label>Name</label>
//             <input type="text" {...formik.getFieldProps('name')} className="w-full p-2 bg-[#2a2a2a] rounded" />
//             {formik.touched.name && formik.errors.name && <p className="text-red-500 text-sm">{formik.errors.name}</p>}
//           </div>
//           <div>
//             <label>Email</label>
//             <input type="email" {...formik.getFieldProps('email')} className="w-full p-2 bg-[#2a2a2a] rounded" />
//             {formik.touched.email && formik.errors.email && <p className="text-red-500 text-sm">{formik.errors.email}</p>}
//           </div>
//           <div>
//             <label>Password</label>
//             <input type="password" {...formik.getFieldProps('password')} className="w-full p-2 bg-[#2a2a2a] rounded" />
//             {formik.touched.password && formik.errors.password && <p className="text-red-500 text-sm">{formik.errors.password}</p>}
//           </div>
//           <div className="flex justify-center items-center">
//           <button type="submit" disabled={formik.isSubmitting} className="bg-[#d16439] hover:bg-[#b14e27] text-white px-4 py-2 rounded-lg transition duration-200">
//             {formik.isSubmitting ? 'Signing up...' : 'Sign Up'}
//           </button>
//           </div>
//         </form>
//         <p className="text-sm mt-4">Already have an account? <Link to="/login" className="text-primary underline">Login</Link></p>
//       </div>
//     </div>
//   );
// };

// export default Signup;


// src/components/Auth/Signup.jsx
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import signupImg from "../../assets/Images/signupImg.webp"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Signup = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', values);
      login(res.data.token);
      navigate('/');
    } catch (err) {
      setErrors({ server: err.response?.data?.msg || 'Signup failed' });
    } finally {
      setSubmitting(false);
    }
  };
  
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
      src={signupImg}
      alt="Signup Image"
      effect="blur"
      className="h-full w-full object-cover"
    />
        </div>
        
        {/* Signup Form Section */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-[#1e1e1e] to-[#212121] p-8 md:p-12">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#d16439]/10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#d16439]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-[#d16439]">Create Account</h2>
            <p className="mt-2 text-sm text-gray-400">Sign up to get started with DevVerse</p>
          </div>
          
          <Formik
            initialValues={{ name: '', email: '', password: '' }}
            validationSchema={Yup.object({
              name: Yup.string()
                .min(2, 'Name must be at least 2 characters')
                .required('Name is required'),
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
                  <label className="mb-2 block text-sm font-medium text-gray-300">Full Name</label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <Field 
                      name="name" 
                      type="text" 
                      className="block w-full rounded-lg border border-gray-700 bg-[#2a2a2a] p-4 pl-10 text-white placeholder-gray-500 focus:border-[#d16439] focus:outline-none focus:ring-1 focus:ring-[#d16439]"
                      placeholder="John Doe"
                    />
                  </div>
                  <ErrorMessage name="name" component="div" className="mt-1 text-sm text-red-400" />
                </div>
                
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
                        Creating Account...
                      </>
                    ) : 'Create Account'}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-[#d16439] hover:text-[#e87b4e] transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;