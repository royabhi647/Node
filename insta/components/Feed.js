import { Avatar } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Upload from "./Upload";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { AuthContext } from "../context/auth";
import { collection, doc, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import Post from "./Post";

function Feed() {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log(user.uid);
    const unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
      console.log("hello", doc.data());
      setUserData(doc.data());
    });
    return () => {
      unsub();
    };
  }, [user]);

  //get posts from db 
  useEffect(() => {
    const unsub = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp","desc")),
      (snapshot) => {
        let tempArray = [];
        snapshot.docs.map((doc) => {
          tempArray.push(doc.data());
        });
        setPosts([...tempArray]);
        console.log(tempArray);
      }
    );
    return () => {
      unsub();
    };
  },[]);

  return (
    <div className="feed-container">
      {/* Navbar */}
      <Navbar userData={userData} />

      {/* Upload video btn */}
      <Upload userData={userData} />

      {/* reels */}
      <div className="videos-container">
        {
          posts.map((post) => (
            <Post postData={post} userData={userData} />
          ))
        }
      </div>
    </div>
  );
}

export default Feed;
