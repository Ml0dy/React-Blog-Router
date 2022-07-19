import React from "react"
import "../styles/Main.css"
import { BrowserRouter as Router } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import Navigation from "./Navigation"
import Page from "./Page"

function Main() {
  return (
    <Router>
      <div className="app">
        <header>{<Header />}</header>
        <main>
          <aside>{<Navigation />}</aside>
          <section className="page">{<Page />}</section>
        </main>
        <footer>{<Footer />}</footer>
      </div>
    </Router>
  )
}

export default Main
