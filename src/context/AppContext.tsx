import { ReactNode, createContext, useContext, useReducer } from "react";
import { reducer, contextValue, initialState } from "./Reducer";
import { getContextValue } from "./Action";
import Message from "@/components/shared/Message";
import { ContextProps } from "@/types/Context";

const GlobalContext = createContext<ContextProps>(contextValue);

export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = getContextValue(state, dispatch)

  return (
    <GlobalContext.Provider value={contextValue}>
      <>
        <Message 
          show={state?.message?.show}
          text={state?.message?.text}
          type={state?.message?.type}
        />
        {children}
      </>
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext)
