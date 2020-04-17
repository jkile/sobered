import React, {useState} from "react"
import UserContext from './UserContext'

const UserProvider = props => {
    const [username, setUsername] = useState(false)
    const [userId, setuserId] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const [authenticated, setAuthenticated] = useState('')
return (
    <UserContext.Provider value={{
        getUserId: (arg) => setuserId(arg),
        setAuthStatus: () => setAuthenticated(true)
    }}>
    {props.children}
    </UserContext.Provider>
)
}

export default UserProvider;