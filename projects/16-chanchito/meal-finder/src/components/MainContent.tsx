import {  Text, SimpleGrid, Skeleton, } from '@chakra-ui/react'
import { Meal } from '../types'
import MealCard from './MealCard';
import SkeletonCard from './SkeletonCard';

type Props = {
    meals?: Meal[] ;
    loading: boolean;
    openRecipe: (meal:Meal)=> void
}

function MainContent({ meals, loading , openRecipe}: Props) {
    
    const skeletons = [1,2,3,4,5,6,7,8]

    if (!meals?.length) {
        return (
            <Text>No meals found.</Text>
        );
    }
    
    return (
        <SimpleGrid  columns={{ sm: 2, md: 3, lg: 4, xl: 5, '2xl': 6 }} spacingX="20px" spacingY="20px">
            {loading && skeletons.map(skeleton => <SkeletonCard key={skeleton}></SkeletonCard>)}
            {!loading && meals.map(m => (
                <MealCard openRecipe= {()=>openRecipe(m)} key={m.idMeal} meal={m} ></MealCard>
            ))}
        </SimpleGrid>
    )
}

export default MainContent
