import { Grid, GridItem, useDisclosure } from '@chakra-ui/react'
import Header from './components/Header'
import Sidenav from './components/Sidenav'
import MainContent from './components/MainContent'
import {  useState } from 'react'
import { Category, Meal, SearchForm, MealDetails } from './types'
import useHttpData from './hooks/useHttpData'
import axios from 'axios'
import RecipeModal from './components/RecipeModal'
import useFetch from './hooks/useFetch'

const baseUrl = "https://www.themealdb.com/api/json/v1/1";

const url = `${baseUrl}/list.php?c=list`;

const makeMealUrl = (category: Category) => {
    return `${baseUrl}/filter.php?c=${category.strCategory}` 
}
const defaultCategory = { strCategory: "Beef" }


function App() {
    
    const [ selectedCategory, setSelectedCategory] = useState<Category>(defaultCategory)
    const { loading, data } = useHttpData<Category>(url);
    const {
        loading: loadingMeal,
        data: dataMeal,
        setData: setMeals,
        setLoading: setLoadingMeal
    } = useHttpData<Meal>(makeMealUrl(defaultCategory));
    
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    const searchApi = (searchForm: SearchForm) => {
        
        setLoadingMeal(true);
        
        const url = `${baseUrl}/search.php?s=${searchForm.search}`;

        axios.get<{ meals: Meal[] }>(url)
            .then(({ data }) => setMeals(data.meals))
            .finally(() => setLoadingMeal(false))
    }

    const { fetch, loading:loadingMealDetails, data: mealDetailData} = useFetch<MealDetails>();
    

    const searchMealDetails = (meal: Meal) => {
        onOpen();
        fetch(`${baseUrl}/lookup.php?i=${meal.idMeal}`)
    }

    return (
        <>
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
                    categories={data}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    loading={loading}
                ></Sidenav>
            </GridItem>

            <GridItem p="4" bg="gray.100" area={'main'}>
                <MainContent openRecipe={searchMealDetails} meals={dataMeal} loading = {loadingMeal}></MainContent>
            </GridItem>

            </Grid>
            
            <RecipeModal isOpen={isOpen} onClose={onClose} loading={loadingMealDetails} data={mealDetailData}></RecipeModal>
        </>
    )
}

export default App
