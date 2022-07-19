import React, { useState } from "react"
import "../styles/Contact.css"

const ContactPage = () => {
  const [value, setValue] = useState("")
  const [isEmpty, setIsEmpty] = useState(true)

  const handleChange = (e) => {
    if (e.target.value.length > 0) {
      setIsEmpty(true)
      setValue(e.target.value)
    } else {
      setValue(e.target.value)
      setIsEmpty(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setValue("")
    setIsEmpty(true)
  }

  return (
    <div className="contact">
      <form onSubmit={handleSubmit}>
        <h3>Napisz do nas</h3>
        <textarea
          value={value}
          onChange={handleChange}
          placeholder="Wpisz wiadomość"
        ></textarea>
        <button>Wyślij</button>
      </form>
    </div>
  )
}

export default ContactPage
