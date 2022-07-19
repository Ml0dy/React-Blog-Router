import React from "react"
import Article from "../components/Article"

const articleList = [
  {
    id: 1,
    title: "Czym jest JavaScript?",
    author: "Jan Kowalski",
    text: "Skryptowy oraz wieloparadygmatowy język programowania, stworzony przez firmę Netscape, najczęściej stosowany na stronach internetowych.",
  },
  {
    id: 2,
    title: "Czym jest HTML?",
    author: "Adam Mickiewicz",
    text: "HTML (ang. HyperText Markup Language, hipertekstowy język znaczników) – język znaczników stosowany do tworzenia dokumentów hipertekstowych.",
  },
  {
    id: 3,
    title: "Czym jest React?",
    author: "Wikipedia",
    text: "React.js – biblioteka języka programowania JavaScript, która wykorzystywana jest do tworzenia interfejsów graficznych aplikacji internetowych. Została stworzona przez Jordana Walke, programistę Facebooka, a zainspirowana przez rozszerzenie języka PHP – XHP. ",
  },
  {
    id: 4,
    title: "Czym jest Angular?",
    author: "Mateusz Nowak",
    text: "Angular – otwarty framework i platforma do tworzenia SPA, napisany w języku TypeScript i wspierany oraz rozwijany przez Google",
  },
]

const HomePage = () => {
  const articles = articleList.map((element) => (
    <Article key={element.id} {...element} />
  ))
  return <div className="home">{articles}</div>
}

export default HomePage
