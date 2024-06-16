import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams(); // shows the which id user is the path
  return <div>User: {id}</div>;
}

export default User;
