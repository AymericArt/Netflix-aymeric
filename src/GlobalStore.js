import React, {useReducer} from "react";
import Reducer from './reducers/apiReducer';

export const GlobalStore = React.createContext();

export const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer);

    return (
        <GlobalStore.Provider value={[ state, dispatch ]}>
            {children}
        </GlobalStore.Provider>
    );
}

