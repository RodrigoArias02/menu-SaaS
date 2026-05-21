import { useState } from "react"

import Header from "./components/layouts/Header.jsx"
import Container from "./components/layouts/Container.jsx"
import "./css/miapp.css"

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