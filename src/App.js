import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import MainContent from './Components/MainContent'

export default function App() {
    return(
        <div className="div-card">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}