import { Avatar } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { AuthContext } from "../context/auth";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import * as ReactDOM from "react-dom";

function Post({ postData, userData }) {
  // console.log(postData);
  // console.log(userData);

  const { user } = useContext(AuthContext);
  const [like, setLike] = useState(false);
  const [isMute, setIsMute] = useState(true);

  useEffect(() => {
    if (postData.likes.includes(user.uid)) {
      setLike(true);
    } else {
      setLike(false);
    }
  }, [postData]);

  const handleLike = async () => {
    if (!like) {
      await updateDoc(doc(db, "posts", postData.postId), {
        likes: arrayUnion(user.uid),
      });
    } else {
      await updateDoc(doc(db, "posts", postData.postId), {
        likes: arrayRemove(user.uid),
      });
    }
  };

  const handleMute = () => {
    if (isMute) {
      setIsMute(false);
    } else {
      setIsMute(true);
    }
  };

  const handleNextVideo = (e) => {
    //get the next video
    let nextVideo = ReactDOM.findDOMNode(e.target).parentNode.nextSibling;
    if (nextVideo) {
      nextVideo.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="post-container">
      <video
        src={postData.postUrl}
        controls
        muted={isMute}
        onClick={handleMute}
        onEnded={handleNextVideo}
      />
      <div className="videos-info">
        <div className="avatar-container">
          <Avatar
            alt="Remy Sharp"
            src={postData.profileUrl}
            sx={{ margin: "0.5rem" }}
          />
          <p style={{ color: "white", fontWeight: "bold" }}>
            {postData.profileName}
          </p>
        </div>
        <div className="post-like">
          <FavoriteIcon
            fontSize="large"
            style={like ? { color: "red" } : { color: "white" }}
            onClick={handleLike}
          />
          {postData.likes.length > 0 && postData.likes.length}
        </div>
      </div>
    </div>
  );
}

export default Post;
