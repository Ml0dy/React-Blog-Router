import React from "react"
import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import ProductList from "../pages/ProductList"
import ProductPage from "../pages/ProductPage"
import ContactPage from "../pages/ContactPage"
import AdminPage from "../pages/AdminPage"
import LoginPage from "../pages/LoginPage"
import ErrorPage from "../pages/ErrorPage"

const Page = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:name" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default Page
