import { createContext } from "react";
import PropTypes from 'prop-types';


export const AuthContext = createContext(null)

const AuthProvider = ( { children } ) => {

    const authInfo = {name: 'Nodi Sagor khal bill'}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

/**
 * 1.create context and export it
 * 2.set Provider with value
 * 3.use the auth provider in the main.jsx file
 * 4.access children in the AuthProvider component as chilldren as chilldren and use it in the middle of the provider
 * 5
 */