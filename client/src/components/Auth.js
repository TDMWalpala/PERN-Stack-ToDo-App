import React, { useState } from 'react'

const Auth = () => {
  const [isLoggedIn , setIsLoggedIn] = useState(true)
  const [error, setError] = useState(null)

  const viewLogin = (status) => {
    setError(null)
    setIsLoggedIn(status)
  }

  return (
    <div className='auth-container'>
      <div className='auth-container-box'>
        <form>
          <h2>{isLoggedIn ? 'Please LogIn' : 'Please Sign Up!'}</h2>
          <input type='email' placeholder='email'/>
          <input type='password' placeholder='password'/>
          {!isLoggedIn && <input type='password' placeholder='confirm password'/>}
          <input type='submit' className='create'/>
          {error && <p>{error}</p>}
        </form>
        <div className='auth-options'>
          <button onClick={() => viewLogin(false)} style={{backgroundColor : !isLoggedIn ? 'rgb(255,255,255)' : 'rgb(188,188,188)'}}>Sign Up</button>
          <button onClick={() => viewLogin(true)} style={{backgroundColor : isLoggedIn ? 'rgb(255,255,255)' : 'rgb(188,188,188)'}}>Login</button>
        </div>
      </div>

    </div>
  )
}

export default Auth
