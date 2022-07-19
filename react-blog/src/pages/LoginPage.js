import React from "react"
import "../styles/LoginPage.css"

const LoginPage = () => {
  return (
    <div className="loginPage">
      <label>
        Podaj login
        <input type="text" />
      </label>
      <label>
        Podaj hasło
        <input type="password" />
      </label>
      <button>Zaloguj</button>
    </div>
  )
}

export default LoginPage
