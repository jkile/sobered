import React from "react";


const UserContext = React.createContext({
    userId: "",
    username: '',
    thumbnail: '',
    authenticated: false,
    onLogin: () => undefined,
    
});

export default UserContext;
