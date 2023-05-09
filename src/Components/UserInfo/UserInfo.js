import React from 'react';
import './UserInfo.css';

const UserInfo = ({ user }) => {

    const { displayName, email, photoURL } = user;

    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-6 col-sm-12 userinfo">
                    <h4>Name: {displayName}</h4>
                    <h5>Email: {email}</h5>
                </div>
                <div className="col-lg-6 col-sm-12 userimg">
                    <img src={photoURL} title={displayName} alt="" />
                </div>
            </div>
        </div>
    );
};

export default UserInfo;