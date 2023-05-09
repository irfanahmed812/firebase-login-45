import React, { useState } from 'react';
import './Signup.css';
import { getAuth, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, signOut } from "firebase/auth";
import app from '../../Firebase/firebase.init';
import UserInfo from '../UserInfo/UserInfo';


const auth = getAuth(app);

const Signup = () => {

    // state dicleare
    const [user, setUser] = useState();

    // google provider
    const googleProvider = new GoogleAuthProvider();
    // github provider
    const githubProvider = new GithubAuthProvider();

    // google signup method
    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setUser(user);

            }).catch((error) => {
                console.log(error);
            });
    }

    // github signup method
    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    // sign out method
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser([])
            })
            .catch((error) => {
                setUser([])
            })
    }

    return (
        <div className='container'>

            {
                user?.uid ? <div className="sign-out"><button title='sign-out' onClick={handleSignOut}>Sign out <i className="fa-solid fa-right-from-bracket"></i></button></div> :
                    <div className="d-flex justify-content-center mt-5 pt-3">
                        <div className="card">
                            <h3 className='py-3'>Please sign up</h3>
                            <span></span>
                            <div className="card-body">
                                <button className='signup-btn' onClick={handleGoogleLogin}><i className="fa-brands fa-google"></i> Sign up with Google</button>
                                <div className="mt-4 pb-3">
                                    <button className='signup-btn' onClick={handleGithubLogin}> <i className="fa-brands fa-github"></i> Sign up with Github</button>
                                </div>
                            </div>
                        </div>
                    </div>
            }
            <div className="user-information">
                {
                    user?.uid && <UserInfo key={user?.uid} user={user}></UserInfo>
                }
            </div>
        </div>
    );
};

export default Signup;
