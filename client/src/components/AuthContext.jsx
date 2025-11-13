import { createContext, useContext, useState } from "react";

// This page is used to create a global authentication context that will be used to manage the user's login state across the application.
const AuthContext = createContext();

// This is the component that wraps the app component in main.jsx to determinen login state
export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook for using auth context
export const useAuth = () => {
    return useContext(AuthContext);
};
