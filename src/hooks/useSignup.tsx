import { useState } from "react";
import { useAuthContext } from "./useUserContext";

export const useSignup = () => {
  const { dispatch } = useAuthContext();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const signup = async (username: string, email: string, password: string) => {
    //Todos
    // dont forget to format the json type and the error state is null for now you need to add the object property

    setIsLoading(true);
    setError(null);

    const response = await fetch("/api/comment/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });
    const json = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));
      // update the auth context
      dispatch({ type: "LOGIN", payload: json });
      setIsLoading(false);
    }
  };
  return { signup, isLoading, error };
};
