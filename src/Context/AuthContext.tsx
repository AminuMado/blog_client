import { createContext, useReducer } from "react";
type user = {
  username: string;
  token: string;
};

// // An enum with all the types of actions to use in our reducer
// enum AuthActionKind {
//   LOGIN = "LOGIN_USER",
//   LOGOUT = "LOGOUT_USER",
// }

// An interface for our user state
interface AuthState {
  user: user | null;
}
// An interface for our actions
interface AuthAction {
  type: "LOGIN" | "LOGOUT";
  payload: user | null;
}
// Our reducer function that uses a switch statement to handle our actions
function authReducer(state: AuthState, action: AuthAction) {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN":
      return {
        user: payload,
      };
    case "LOGOUT":
      return {
        user: null,
      };
    default:
      return state;
  }
}

interface ContextType {
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
}

type AuthCtxProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext({} as ContextType);
export const AuthContextProvider = ({ children }: AuthCtxProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
