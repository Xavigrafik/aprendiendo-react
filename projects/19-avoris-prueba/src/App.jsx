
import React from 'react';
import NavBar from './components/NavBar/NavBar.jsx'
import Hero from './components/Hero/Hero.jsx'
import MainContent from './components/MainContent/MainContent.jsx'
import Aside from './components/Aside/Aside.jsx';
import CardList from './components/CardList/CardList.jsx'
import Footer from './components/Footer/Footer.jsx'


function App() {

    return (
        <>
            <div className="container--fluid">
                <NavBar />
                <Hero />
                <MainContent>
                    <div className="container">
                        <div className="row py-3">
                            <div className="col-3">
                            <Aside></Aside>
                            </div>
                            <div className="col-9">
                            <CardList></CardList>
                            </div>
                        </div>
                    </div>
                </MainContent>
                <Footer />

            </div>

        </>
    )
}

export default App
