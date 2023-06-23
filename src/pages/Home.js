import "../home.css"
import React, { useEffect, useState } from 'react'
import {getDocs, collection, deleteDoc,doc} from "firebase/firestore";
import { auth, db } from '../firebase-config';
export const Home = ({isAuth}) => {
  const [postLists, setPostLists] = useState([]);
  const postsCollectionref = collection(db,"posts");


  useEffect(()=>{
    const getPosts = async ()=> {
      const data = await getDocs(postsCollectionref);
      setPostLists(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
    };
    getPosts();
  })
  const deletePost = async (id)=> {
    const postDoc = doc(db,"posts",id)
    await deleteDoc(postDoc);
  }
  return (
    <div className="home__main">{postLists.map((post)=> {
      return <div className="home__post">
        <div className="home__post__heather">
          <div>
          <h1 className="home__title">{post.title}</h1>
          </div>
          <div>
            {isAuth && post.author.id === auth.currentUser.uid && <button className="home__delete__btn" onClick={()=>{deletePost(post.id)}}>delete</button>}
          </div>
        </div>
        <div>
          <p>{post.postText}</p>
        </div>
        <div>
          <h3 className="home__post__author">@{post.author.name}</h3>
        </div>
      </div>
    })}</div>
  )
}
