import React from "react"
import { Route, Routes } from "react-router-dom"
import "../styles/Header.css"
import image1 from "../assets/images/image_1.jpg"
import image2 from "../assets/images/image_2.jpg"
import image3 from "../assets/images/image_3.jpg"
import image4 from "../assets/images/image_4.jpg"

const Header = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<img src={image1} alt="header" />} />
        <Route path="/products" element={<img src={image2} alt="header" />} />
        <Route path="/contact" element={<img src={image3} alt="header" />} />
        <Route path="/admin" element={<img src={image4} alt="header" />} />
        <Route path="*" element={<img src={image1} alt="header" />} />
      </Routes>
    </>
  )
}

export default Header
