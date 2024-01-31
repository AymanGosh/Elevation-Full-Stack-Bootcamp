import { useParams } from "react-router-dom";

function UserProfile() {
  const { userId } = useParams();

  // use the userId variable in your component logic
  return <div>{alert(userId)} </div>;
}
export default UserProfile;
