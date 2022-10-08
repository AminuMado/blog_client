export type author = {
  _id: string;
  username: string;
};
export type comment = {
  _id: string;
  content: string;
  createdAt: string;
  username: string;
  blogId: string;
};

export type blog = {
  _id: string;
  title: string;
  content: string;
  published: boolean;
  createdAt: string;
  author: author;
  comments: comment[];
};
