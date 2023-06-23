import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react'
import {addDoc, collection} from "firebase/firestore";
import { db, auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import "../createpost.css"

export const CreatePost = ({isAuth}) => {

  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postCollectionRef = collection(db,"posts")

  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postCollectionRef, {title, postText, author:{name:auth.currentUser.displayName ,id:auth.currentUser.uid}});
    navigate("/")
  }
  useEffect(()=>{
    if (!isAuth) {
      navigate("/login")
    }
  },[]);
  return (
    <div className='createpost__main'>
      <div className='createpost__container'>
        <h1>Create A Post</h1>
        <div className='createpost__input'>
         <label>Title:</label>
         <input placeholder='Title...' 
         onChange={(event)=>{
          setTitle(event.target.value)}}/>
         <label>Post:</label>
         <textarea placeholder='Post.....'
         onChange={(event)=>{
          setPostText(event.target.value)}}/>
        </div>
        <button onClick={createPost}>Create Post</button>
      </div>
    </div>
  )
}
