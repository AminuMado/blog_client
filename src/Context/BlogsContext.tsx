import { createContext, useReducer } from "react";
type author = {
  _id: string;
  username: string;
};
type comment = {
  _id: string;
  content: string;
  createdAt: string;
  username: string;
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
};
// An enum with all the types of actions to use in our reducer
enum BlogsActionKind {
  GET = "GET_BLOGS",
  CREATE = "CREATE_BLOG",
}

// An interface for our blog state
interface BlogState {
  blogs: blog[];
}
// An interface for our actions
interface BlogsAction {
  type: BlogsActionKind;
  payload: blog[];
}
// Our reducer function that uses a switch statement to handle our actions
function blogsReducer(state: BlogState, action: BlogsAction) {
  const { type, payload } = action;

  switch (type) {
    case BlogsActionKind.GET:
      return {
        blogs: payload,
      };
    case BlogsActionKind.CREATE:
      return {
        blogs: [...payload, ...state.blogs],
      };

    default:
      return state;
  }
}

interface ContextType {
  state: {
    blogs: blog[];
  };
  dispatch: React.Dispatch<BlogsAction>;
}

type BlogsContextProviderProps = {
  children: React.ReactNode;
};

export const BlogsContext = createContext({} as ContextType);
export const BlogsContextProvider = ({
  children,
}: BlogsContextProviderProps) => {
  const [state, dispatch] = useReducer(blogsReducer, { blogs: [] });
  return (
    <BlogsContext.Provider value={{ state, dispatch }}>
      {children}
    </BlogsContext.Provider>
  );
};
