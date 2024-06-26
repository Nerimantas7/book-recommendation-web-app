// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import { loginAPICall, storeToken } from '../services/AuthService';

// const LoginComponent = () => {

//     const [userName, setUserName] = useState('')
//     const [password, setPassword] = useState('')

//     const navigator = useNavigate();

//     const handleCancel = () => {
//         navigator('/');
//     };

//     function handleLoginForm(e) {
//         e.preventDefault();

//         const loginObj = { userNameOrEmail: userName, password }

//         console.log(loginObj);

//         loginAPICall(loginObj).then((response) => {
//             console.log(response.data);

//             const token = 'Basic' + window.btoa(userName + ":" + password);
//             storeToken(token);

//             navigator('/');

//         }).catch(error => {
//             console.log(error);
//         })
//     }

//     return (
//         <div className='container'>
//             <div className='row'>
//                 <div className='col-md-6 offset-md-3 mt-4'>
//                     <div className='card'>
//                         <div className='card-header'>
//                             <h3 className='text-center'>Login Form</h3>
//                         </div>
//                         <div className='card-body'>
//                             <form>

//                                 <div className='row  mb-3'>
//                                     <label className='col-md-3 control-label'>Username or Email:</label>
//                                     <div className='col-md-9'>
//                                         <input
//                                             type='text'
//                                             name='userName'
//                                             className='form-control'
//                                             placeholder='Enter username'
//                                             value={userName}
//                                             onChange={(e) => setUserName(e.target.value)}
//                                         ></input>
//                                     </div>
//                                 </div>

//                                 <div className='row  mb-3'>
//                                     <label className='col-md-3 control-label'>Password:</label>
//                                     <div className='col-md-9'>
//                                         <input
//                                             type='password'
//                                             name='password'
//                                             className='form-control'
//                                             placeholder='Enter password'
//                                             value={password}
//                                             onChange={(e) => setPassword(e.target.value)}
//                                         ></input>
//                                     </div>
//                                 </div>

//                                 <div className='form-group mb-3'>
//                                     <button className='btn btn-secondary' onClick={(e) => handleLoginForm(e)}>Submit</button>
//                                     <button className='btn btn-outline-secondary mx-3' onClick={handleCancel}>Cancel</button>

//                                 </div>

//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default LoginComponent

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAPICall, storeToken } from '../services/AuthService';

const LoginComponent = () => {
    const [userNameOrEmail, setUserNameOrEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigator = useNavigate();

    const handleCancel = () => {
        navigator('/');
    };

    const handleLoginForm = (e) => {
        e.preventDefault();

        const loginObj = { userNameOrEmail, password };

        console.log(loginObj);

        loginAPICall(userNameOrEmail, password)
            .then((response) => {
                console.log(response.data);

                // Ensure there is a space after 'Basic'
                const token = 'Basic ' + window.btoa(userNameOrEmail + ':' + password);
                storeToken(token);

                navigator('/');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 mt-4'>
                    <div className='card'>
                        <div className='card-header'>
                            <h3 className='text-center'>Login Form</h3>
                        </div>
                        <div className='card-body'>
                            <form onSubmit={handleLoginForm}>
                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'>Username or Email:</label>
                                    <div className='col-md-9'>
                                        <input
                                            type='text'
                                            name='username'
                                            className='form-control'
                                            placeholder='Enter username or email'
                                            value={userNameOrEmail}
                                            onChange={(e) => setUserNameOrEmail(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'>Password:</label>
                                    <div className='col-md-9'>
                                        <input
                                            type='password'
                                            name='password'
                                            className='form-control'
                                            placeholder='Enter password'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className='form-group mb-3'>
                                    <button type='submit' className='btn btn-secondary'>Submit</button>
                                    <button type='button' className='btn btn-outline-secondary mx-3' onClick={handleCancel}>Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;
