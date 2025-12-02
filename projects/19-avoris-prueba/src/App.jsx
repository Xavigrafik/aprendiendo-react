
import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar.jsx'
import Hero from './components/Hero/Hero.jsx'
import MainContent from './components/MainContent/MainContent.jsx'
import Aside from './components/Aside/Aside.jsx';
import CardList from './components/CardList/CardList.jsx'
import Footer from './components/Footer/Footer.jsx'
import Button from './components/Button/Button.jsx';


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
                        <div className={`row py-3 filter-row`}>

                            <div className={`aside-panel p-0 ${filterIsOpen? 'isOpen' : ''}`}>
                                <Aside toggleFilter={toggleFilter} />
                            </div>

                            <div className={`content-panel ${filterIsOpen? 'isOpen' : ''} `}>
                                <Button
                                    className='mb-3 filter-toggle-button'
                                    variant='secondary'
                                    size="sm"
                                    type="button"
                                    onClick={toggleFilter}
                                >
                                    {filterIsOpen? 'Ocultar filtros' : 'Ver filtros'} 
                                </Button>
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
