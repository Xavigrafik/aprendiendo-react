import { Button, Card, CardBody, CardFooter, Heading, Image, Text, } from '@chakra-ui/react'
import { Meal } from '../types'

type Props = {
    meal: Meal
    openRecipe: () => void
}

function MealCard({ meal, openRecipe }: Props) {
    return (
        <Card maxW="sm" boxShadow="lg" className="CardCustomClass">
            <CardBody>
                <Image
                    // width="260px"
                    // htmlWidth="100px"
                    // htmlHeight="100px"
                    // boxSize="120px"
                    // aspectRatio={4 / 3}
                    // fit="cover"
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    borderRadius="lg"
                />
                <Heading size="md" color="blue.400">
                    <Text mt="4">{meal.strMeal}</Text>
                </Heading>
                <Text>
                    {meal.idMeal} - {meal.strMeal}
                </Text>
            </CardBody>
            <CardFooter pt="0">
                <Button onClick={openRecipe} color="white" bgColor="blue.400">
                    Ver receta
                </Button>
            </CardFooter>
        </Card>
    )
}

export default MealCard
