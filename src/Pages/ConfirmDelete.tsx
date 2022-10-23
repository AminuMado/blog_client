import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate, useParams } from "react-router-dom";

export const Confirmdelete = () => {
  const user = useAuthContext().state.user;
  const navigate = useNavigate();
  const params = useParams();
  const handleDelete = async () => {
    if (!user) return;
    // This deletes the comment from the db
    const response = await fetch(`/api/blogs/${params.blogId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });

    if (!response.ok) return;

    if (response.ok) {
      navigate("/profile");
    }
  };
  return (
    <div className="delete-container">
      <p>Are you sure you want to delete this blog?</p>
      <div className="delete__buttons">
        <button onClick={handleDelete}>Yes</button>
        <button onClick={() => navigate("/profile")}>No</button>
      </div>
    </div>
  );
};
