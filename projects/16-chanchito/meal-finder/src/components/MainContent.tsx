import {  Text, SimpleGrid, Skeleton, } from '@chakra-ui/react'
import { Meal } from '../types'
import MealCard from './MealCard';
import SkeletonCard from './SkeletonCard';

type Props = {
    meals?: Meal[] ;
    loading: boolean;
}

function MainContent({ meals, loading }: Props) {
    
    const skeletons = [1,2,3,4,5,6,7,8]

    if (!meals?.length) {
        return (
            <Text>No meals found.</Text>
        );
    }
    
    return (
        <SimpleGrid  columns={{ lg: 3, sm: 2 }} spacingX="20px" spacingY="20px">
            {loading && skeletons.map(skeleton => <SkeletonCard key={skeleton}></SkeletonCard>)}
            {!loading && meals.map(m => (<MealCard key={m.idMeal} meal={m} ></MealCard>))}
        </SimpleGrid>
    )
}

export default MainContent
