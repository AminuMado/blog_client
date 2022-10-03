import { createContext, useReducer } from "react";
type author = {
  _id: string;
  username: string;
};
type comment = {
  _id: string;
  content: string;
  createdAt: string;
  author: author;
  blogId: string;
};

type blog = {
  _id: string;
  title: string;
  content: string;
  published: boolean;
  createdAt: string;
  author: author;
  comments: comment[];
  likes: author[];
};
type InitialStateType = {
  blogs: blog[];
};
interface ContextType {
  state: {
    blogs: blog[];
  };
  dispatch: React.Dispatch<{ type: string; value: InitialStateType }>;
}
const initialState: InitialStateType = {
  blogs: [],
};
type reducerActionType = {
  type: string;
  payload: InitialStateType;
};

type BlogsContextProviderProps = {
  children: React.ReactNode;
};
export const blogsReducer = (
  state: InitialStateType,
  action: reducerActionType
) => {
  switch (action.type) {
    case "SET_BLOGS":
      return { blogs: action.payload };
    case "CREATE_BLOG":
      return {
        blogs: [action.payload, ...state.blogs],
      };
    default:
      return state;
  }
};
export const BlogsContext = createContext<ContextType>({} as ContextType);
export const BlogsContextProvider = ({
  children,
}: BlogsContextProviderProps) => {
  const [state, dispatch] = useReducer(blogsReducer, initialState);
  return (
    <BlogsContext.Provider value={{ state, dispatch }}>
      {children}
    </BlogsContext.Provider>
  );
};
