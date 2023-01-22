import { Avatar } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import Upload from "./Upload";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Feed() {
  return (
    <div className="feed-container">
      {/* Navbar */}
      <Navbar />

      {/* Upload video btn */}
      <Upload />

      {/* reels */}
      <div className="videos-container">
      <div className="post-container">
          <video src="https://github.com/royabhi647/Node/blob/main/React/reels/assets/bg2.jpg"/>
          <div className="videos-info">
            <div className="avatar-container">
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/2.jpg"
                sx={{ margin: "0.5rem" }}
              />
              <p>Name</p>
            </div>
            <div className="post-like">
              <FavoriteBorderIcon fontSize="large"/>
              10
            </div>
          </div>
        </div>
        <div className="post-container">
          <video />
        </div>
 
      </div>
    </div>
  );
}

export default Feed;
