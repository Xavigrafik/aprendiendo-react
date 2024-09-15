import { Grid, GridItem } from '@chakra-ui/react'
import Header from './components/Header'
import Sidenav from './components/Sidenav'
import MainContent from './components/MainContent'
import {  useState } from 'react'
import { Category, Meal, SearchForm } from './types'
import useHttpData from './hooks/useHttpData'
import axios from 'axios'


const url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
const makeMealUrl = (category: Category) => {
    return `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}` 
}
const defaultCategory = { strCategory: "Beef" }


function App() {
    
    const [ selectedCategory, setSelectedCategory] = useState<Category>(defaultCategory)
    const { loading, data } = useHttpData<Category>(url);
    const { loading: loadingMeal, data: dataMeal, setData: setMeals, setLoading : setLoadingMeal } = useHttpData<Meal>(makeMealUrl(defaultCategory));
    
    const searchApi = (searchForm: SearchForm) => {
        
        setLoadingMeal(true);
        
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchForm.search}`
        axios.get<{ meals: Meal[] }>(url)
            .then(({ data }) => setMeals(data.meals))
            .finally(()=>setLoadingMeal(false))
    }

    return (
        <Grid
            templateAreas={`
                "header header"
                "nav main"
            `}
            gridTemplateRows={'60px auto'}
            gridTemplateColumns={{ sm: `0 1fr`, md: `250px 1fr` }}
            fontSize={14}

        >
            <GridItem pl="2" bg="gray.300" area={'header'} zIndex="1" pos="sticky" top="0" pt="7px">
                <Header onSubmit={searchApi}></Header>
            </GridItem>

            <GridItem
                p="5"
                area={'nav'}
                pos="sticky"
                top="60px"
                left="0"
                overflowY="auto"
                height="calc(100vh - 60px)"
            >
                <Sidenav
                    loading={loading}
                    categories={data}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                ></Sidenav>
            </GridItem>

            <GridItem p="4" bg="gray.100" area={'main'}>
                <MainContent meals={dataMeal} loading = {loadingMeal}></MainContent>
            </GridItem>
        </Grid>
    )
}

export default App
