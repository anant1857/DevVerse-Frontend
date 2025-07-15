

// src/App.jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Main from './components/CodeReviewer/Main';
import Home from './components/Home/Home';
import { useAuth } from './context/AuthContext';
import PrivateRoute from './PrivateRoute';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ScrollToTop from './components/ScrollToTop';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import BeforeLoginPage from './components/BeforeLoginPage/BeforeLoginPage';
import SnippetGenerator from './components/SnippetGenerator/SnippetGenerator';
import RegexTester from './components/RegexTester/RegexTester';
import SeoChecker from './components/SeoChecker/SeoChecker';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
      <Route path="/before-login" element={<BeforeLoginPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      

        {/* Only show private routes if authenticated */}
        {isAuthenticated ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/review" element={<Main />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/snippet-generator" element={<SnippetGenerator />} />
            <Route path="/seo-checker" element={<SeoChecker />} />
             <Route path="/regex-tester" element={<RegexTester />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          // Redirect unauthenticated users to /before-login
          <Route path="*" element={<Navigate to="/before-login" />} />
        )}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
