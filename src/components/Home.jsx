import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Home = () => {
    const authInfo = useContext(AuthContext);
    console.log(authInfo);
    return (
        <div>
            <h2>This is Home Page {authInfo.name} </h2>
        </div>
    );
};

export default Home;