import {
    Heading,
    Image,
    List,
    ListItem,
    ModalBody,
    ModalCloseButton,
    ModalHeader,
    OrderedList,
    Text,
} from '@chakra-ui/react'

import { MealDetails } from '../types'

type Props = {
    data: MealDetails
}

const joinIngredients = (data: MealDetails) => {
    const ingredients = [];
    for (let i = 1; i < 20; i++) {
        const ingredient = data[`strIngredient${i}`];
        const measure = data[`strMeasure${i}`];
        if (ingredient !== "") {
            ingredients.push(`${ingredient} - ${measure}`)
        }
    }
    return ingredients;
}

const RecipeModalContent = ({ data }: Props) => {
    const ingredients = joinIngredients(data);
    console.log(ingredients);
    
    return (
        <>
            <ModalHeader>{data.strMeal}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Image width="100%" borderRadius="lg" src={data.strMealThumb} alt={data.strMeal} />
                <Heading mt="4" mb="4" size="md">Ingredientes</Heading>

                <OrderedList>
                    {ingredients.map((ingredient) => {
                        return <ListItem key={ingredient}> {ingredient}</ListItem>
                    })}
                    
                </OrderedList>
                
                <Text whiteSpace="pre-line" size="md">{data.strInstructions}</Text>
            </ModalBody>
        </>
    )
}

export default RecipeModalContent
