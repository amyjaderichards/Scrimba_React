import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"

function App() {    
  return (
      <div>
          <Header />

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </BrowserRouter>
      </div>
  )
}

export default App