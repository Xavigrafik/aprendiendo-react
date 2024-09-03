import { Grid, GridItem } from '@chakra-ui/react'
import Header from './components/Header'
import Sidenav from './components/Sidenav'
import MainContent from './components/MainContent'
import {  useState } from 'react'
import { Category, Meal } from './types'
import useHttpData from './hooks/useHttpData'


const url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
const makeMealUrl = (category: Category) => {
    return `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}` 
}
const defaultCategory = { strCategory: "Beef" }


function App() {
    
    const [ selectedCategory, setSelectedCategory] = useState<Category>(defaultCategory)
    const { loading, data } = useHttpData<Category>(url);
    const { loading: loadingMeal, data: dataMeal } = useHttpData<Meal>(makeMealUrl(defaultCategory));
    
    return (
        <Grid
            templateAreas={`
                "header header"
                "nav main"
            `}
            gridTemplateRows={'60px 1fr'}
            gridTemplateColumns={{ sm: `0 1fr`, md: `250px 1fr` }}
            fontSize={14}

        >
            <GridItem pl="2" bg="orange.300" area={'header'}>
                <Header></Header>
            </GridItem>

            <GridItem
                p="5"
                area={'nav'}
                height="calc(100vh - 60px)"
            >
                <Sidenav
                    loading={loading}
                    categories={data}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                ></Sidenav>
            </GridItem>

            <GridItem pl="2" bg="green.300" area={'main'}>
                <MainContent meals={dataMeal} loading = {loadingMeal}></MainContent>
            </GridItem>
        </Grid>
    )
}

export default App
