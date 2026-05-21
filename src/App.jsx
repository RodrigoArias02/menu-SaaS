import { useState } from "react"

import Header from "./components/layouts/header.jsx"
import Container from "./components/layouts/container.jsx"

import "./css/app.css"

function App() {

  const [activeModal, setActiveModal]
    = useState(null)

  return (
    <div className="app">

      <Header
        activeModal={activeModal}
        setActiveModal={setActiveModal}
      />

      <Container
        activeModal={activeModal}
        setActiveModal={setActiveModal}
      />

    </div>
  )
}

export default App