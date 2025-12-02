
import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar.jsx'
import Hero from './components/Hero/Hero.jsx'
import MainContent from './components/MainContent/MainContent.jsx'
import Aside from './components/Aside/Aside.jsx';
import CardList from './components/CardList/CardList.jsx'
import Footer from './components/Footer/Footer.jsx'


function App() {

    const [filterIsOpen, setFilterIsOpen] = useState(false);

    const toggleFilter = () => {
        setFilterIsOpen(prev => !prev);
    };



    return (
        
        <>
            <div className="container--fluid">
                <NavBar />
                <Hero />
                <MainContent>
                    <div className="container">
                        <div className={`row filter-row`}>

                            <div className={`aside-panel p-0 ${filterIsOpen? 'isOpen' : ''}`}>
                                <Aside toggleFilter={toggleFilter} />
                            </div>

                            <div className={`content-panel ${filterIsOpen? 'isOpen' : ''} `}>
                                <CardList toggleFilter={toggleFilter} filterIsOpen={filterIsOpen}  ></CardList>
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
