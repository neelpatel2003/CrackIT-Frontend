import axios from 'axios';
import React, { useState } from 'react';
import Navbar from './Navbar';
import Video from './Video';
import { useNavigate } from 'react-router-dom';
import variables from '../variables';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    // Check if already logged in
    React.useEffect(() => {
        if (variables.getIsLoggedIn()) {
            navigate('/');
        }
    }, [navigate]);
    const handleEmailChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Logging in with:', { username, password });
        const data = {
            username: username,
            password: password
        };
        await axios.post('https://crackit-backend-94gb.onrender.com/api/login', data, {
            // withCredentials: true
        })
            .then((response) => {
                variables.setUserName(response.data.user.username);
                variables.setIsLoggedIn(true);
                console.log(response);
                alert("Logged in successfully!");
                navigate('/');
            })
            .catch((error) => {
                alert(`Error occurred: ${error.response?.data?.error || 'Unknown error'}`);
                console.log(error);
            });
    };


    return (
        <>
            <Navbar />
            <Video />
            <div className='login-container'>
                <h2 className='font-serif'>Login</h2>
                <hr />
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
                <div className='create-acc'>New to CrackIT ? <a href="./signup">Create account</a></div>
            </div>
        </>
    );
};

export default Login;
