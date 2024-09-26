import React, { useState } from 'react';
import axios from 'axios';

const SignUpLogin = () => {
  const [isLogin, setIsLogin] = useState(false); // Toggle between login and signup
  const [fullName, setFullName] = useState(''); // State for full name (signup only)
  const [email, setEmail] = useState(''); // State for email
  const [password, setPassword] = useState(''); // State for password
  const [error, setError] = useState(''); // Error state for error messages
  const [success, setSuccess] = useState(''); // Success message state

  // Function to handle form submission for signup/login
  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isLogin ? '/api/auth/login' : '/api/auth/signup';
    const data = {
      email,
      password,
      ...(isLogin ? {} : { fullName }), // Include fullName only in signup
    };

    try {
      const response = await axios.post(url, data);
      setSuccess(response.data.message);
      setError(''); // Clear any previous errors
    } catch (error) {
      console.error('Error during request:', error);  // Log full error details for debugging
      setError(error.response?.data?.message || 'Request failed!');
      setSuccess(''); // Clear success message on error
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>

        {/* Display error or success messages */}
        {error && <p style={styles.errorText}>{error}</p>}
        {success && <p style={styles.successText}>{success}</p>}

        {/* Form for login/signup */}
        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Full name input for signup */}
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              style={styles.input}
            />
          )}

          {/* Email input */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />

          {/* Password input */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />

          {/* Submit button */}
          <button type="submit" style={styles.submitButton}>
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        {/* Toggle between login and signup */}
        <p style={styles.toggleText}>
          {isLogin ? (
            <>
              Don't have an account?{' '}
              <span onClick={() => setIsLogin(false)} style={styles.toggleLink}>
                Sign Up
              </span>
            </>
          ) : (
            <>
              Already registered?{' '}
              <span onClick={() => setIsLogin(true)} style={styles.toggleLink}>
                Login
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

// Inline styles for the SignUp/Login page
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#1a1a1a', // Dark background
    color: '#fff', // White text
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    backgroundColor: '#333', // Dark card background
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)', // Darker shadow
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
    color: '#fff',
  },
  input: {
    padding: '12px 15px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #555',
    backgroundColor: '#444',
    color: '#fff',
    marginBottom: '15px',
    width: '100%',
  },
  submitButton: {
    padding: '12px',
    backgroundColor: '#FF5733', // Orange button
    color: 'white',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    width: '100%',
  },
  toggleText: {
    marginTop: '10px',
  },
  toggleLink: {
    color: '#FF5733', // Orange link
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  errorText: {
    color: '#ff4d4d',
    marginBottom: '10px',
  },
  successText: {
    color: '#00e676',
    marginBottom: '10px',
  },
};

export default SignUpLogin;
