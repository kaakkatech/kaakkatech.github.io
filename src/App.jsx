import { useState } from 'react'
import ImgCoding from "./assets/coding.png";
import ImgKLogo from "./assets/k_logo.png";
import GifCoding from './assets/code-giphy.gif'
import './App.css'

function App() {
  
  return (
    <div className="container">
      <header className="header">
        <div className="logo-container">
          <img src={ImgKLogo} alt="Logo" className="logo" />
        </div>
      </header>
      <main className="main">
        <div className="row">
          <div className="img-container">
            <img src={ImgCoding} alt="Coding" className="img-coding" />
          </div>
          <div className="gif-container">
            <img src={GifCoding} alt="Coding" className="gif-coding" />
          </div>
        </div>
        <h3>We Are Coding!</h3>
        <span>COMING SOON</span>
      </main>
    </div>
  )
}

export default App
