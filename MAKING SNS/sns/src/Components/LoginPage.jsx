import React, { useState } from 'react'

export default function LoginPage() {
const [email, setEmail]= useState("");
const [password, setPassword]= useState("");

const login = async (email, password) =>{
    const baseUrl = "https://api.mandarin.weniv.co.kr";
    const reqPath = "/user/login";
    const reqUrl = baseUrl+reqPath

    const loginData ={
        "user":{"email":email,
                "password":password}
    }
 //login token
    const res = await fetch(reqUrl,{
        method:"POST",
        headers:{
            "Content-type":"application/json"},
        body:JSON.stringify(loginData)}
    );
    const json = await res.json();
    console.log(json);
    const token = json.user.token;
    console.log(token);
    localStorage.setItem("token",token)
}

const inputEmail = (e)=>{
    setEmail(e.target.value)

}
const inputPassword = (e)=>{
    setPassword(e.target.value)
    
}

const submitLogin = (e)=>{
    e.preventDefault();
    login()
}





  return (
    <div>
        <h1>로그인</h1>
        <section>
            <h2>email,  pw 입력하는 곳</h2>
            <form onSubmit={submitLogin}>
                <input type="text" placeholder='email' onChange={inputEmail} />
                <input type="password" placeholder='비밀번호입력' onChange={inputPassword}/>
                <button>login</button>
            </form>
        </section>
    </div>
  )
}
