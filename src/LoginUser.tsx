import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import history from '@history';

function LoginUser() {

    const [currentUser, setCurrentUser]=useState({});

    useEffect(()=>{
        //@ts-ignore
        fetchUser(currentUser?.id);
    },[currentUser])

    const fetchUser = async (id : number)=>{
        const response = await axios.post ("/api/Login?id" + id).then((res) => {
            history.push('/Logined');
        }).catch(err=>{
            console.log(err)
        });
    }
    const handleChanged =(event:any)=>{
        setCurrentUser({...currentUser, [event.target.name] : event.target.value});
    }
  return (
    <div className="App">
      <header className="app-header">
        <img src="https://www.kolaybi.com/images/base/kolaybi_logotype_light.png" alt="logo" width="300" />
        <span className="app-title">KolayBi FE Starter Pack</span>
        <form >
            <input type='email' placeholder='Enter Your Email' name ="email" onChange={(event)=>{handleChanged(event)}}></input>
            <input type='pasword' placeholder='Enter Your Password' name='password' onChange={(event)=>{handleChanged(event)}}></input>
            <button type='submit'>Login</button>
        </form>
      </header>
      
    </div>
  );
}

export default LoginUser;