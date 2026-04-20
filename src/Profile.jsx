import { useState } from "react";

function Profile({ name, role }) {

  const [likes, setLikes] = useState(0);
  const[Dislike,setDislike]=useState(0);

  return (
    <div style={{
      border: "1px solid pink",
      padding: "10px",
      margin: "10px",
      borderRadius: "10px",
      backgroundColor:"pink",
    }}>
      <h2>{name}</h2>
      <h3>{role}</h3>

      <p>LIKES: {likes}</p>
      <p>DISLIKE: {Dislike}</p>

      <button onClick={() => setLikes(likes + 1)}>
        Like 👍
      </button>
      <button onClick={() => setDislike(likes + 1)}>
        DisLike 👍
      </button>
    </div>
  );
}

export default Profile;