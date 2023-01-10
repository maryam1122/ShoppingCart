
import React ,{useEffect} from 'react';
import { useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHook';


const ProfilePage = () => {
  const user = useAppSelector((state) => state.userReducer.currentUser);
  
  console.log(user);
  const nav = useNavigate();
  useEffect(()=> {
    const isLogin = localStorage.getItem("loggedInUser")
    if(!isLogin){
      nav("/login")
    }
  })
  

  return (
    <div>
      <h1>Profile</h1>
      {user && (
        <div key={user.id}>
          <img src={user.avatar} alt={user.name} />
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  )
}

export default ProfilePage