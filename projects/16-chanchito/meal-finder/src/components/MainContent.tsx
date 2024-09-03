import { Button, Card, CardBody, Heading, Text, Image, CardFooter, SimpleGrid, } from '@chakra-ui/react'
import { Meal } from '../types'

type Props = {
    meals?: Meal[] ;
    loading: boolean;
}

function MainContent({ meals, loading }: Props) {
    
    if (!meals?.length) {
        return (
            <Text>No meals found.</Text>
        );
    }

    return (
        <SimpleGrid columns={[2, null, 3]} spacing='20px'>
            {meals.map(m => (<Card key={m.idMeal} maxW="sm" boxShadow="lg">
                    <CardBody>
                        <Image
                            src={m.strMealThumb}
                            alt={m.strMeal}
                            borderRadius="lg"
                        />
                        <Heading size="md" color="blue.400">
                            <Text mt="4"> Living room Sofa </Text>
                        </Heading>
                        <Text>
                            This sofa is perfect for modern tropical spaces, baroque
                            inspired spaces, earthy toned spaces and for people who
                            love a chic design with a sprinkle of vintage design.
                        </Text>
                        
                    </CardBody>
                    <CardFooter pt="0">
                        <Button  color="white" bgColor="blue.400">
                            Buy now
                        </Button>
                    </CardFooter>
                </Card>))

            }

        </SimpleGrid>
    )
}

export default MainContent
