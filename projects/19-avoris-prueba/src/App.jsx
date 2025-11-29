
import React from 'react';
import NavBar from './components/NavBar/NavBar.jsx'
import Hero from './components/Hero/Hero.jsx'
import MainContent from './components/MainContent/MainContent.jsx'
import CardList from './components/CardList/CardList.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {

    return (
        <>
            <div className="container--fluid">
                <NavBar />
                <Hero />
                <MainContent>
                   <CardList></CardList>
                </MainContent>
                <Footer />

            </div>

        </>
    )
}

export default App
