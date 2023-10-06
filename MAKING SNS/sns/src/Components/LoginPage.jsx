import React from 'react'

export default function LoginPage() {
  return (
    <div>
        <h1>로그인</h1>
        <section>
            <h2>email,  pw 입력하는 곳</h2>
            <form >
                <input type="text" placeholder='email' />
                <input type="password" placeholder='비밀번호입력'/>
                <button>login</button>
            </form>
        </section>
    </div>
  )
}
