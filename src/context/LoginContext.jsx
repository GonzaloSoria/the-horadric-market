import { createContext, useState, useContext } from "react";
import { handle_sign_in } from "../utils/login";

const LoginContext = createContext([]);
export const useLoginContext = () => useContext(LoginContext);

export const LoginContextProvider = ({children}) => {
    const [loged, setLoged] = useState(false);

    handle_sign_in(setLoged);

    return (
        <LoginContext.Provider value={{
            loged
        }}>
            {children}
        </LoginContext.Provider>
    )
}