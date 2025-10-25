import { createContext } from "react";
import {useState} from "react";
const User = createContext();
export default User;

export const ContextProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState({});

    return (<User.Provider value={{users,setUsers,currentUser,setCurrentUser}}>
        {children}
    </User.Provider>);
}