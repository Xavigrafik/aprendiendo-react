import {  Heading, Link, SkeletonText, VStack } from '@chakra-ui/react'
import { Category } from '../types'

type Props = {
    categories: Category[]
    loading: boolean;
    selectedCategory: Category;
    setSelectedCategory: (category: Category) => void;
}

const selectedProps = {
    bgColor:"blue.400",
    color:"white",
    fontWeight:"bold",
}

function Sidenav({ loading, categories, selectedCategory, setSelectedCategory }: Props) {

    if (!categories) {
        return null;
    }
    
    return loading ? <SkeletonText mt='1' noOfLines={8} spacing='6' skeletonHeight='2' /> :  (
        <>
            <Heading color="blue.400" fontSize={12} fontWeight="bold" mb={4}>
                CATEGORÍAS
            </Heading>
            <VStack align="stretch">
                
                {categories.map((cat) => (
                    <Link
                        key={cat.strCategory}
                        onClick={()=>setSelectedCategory(cat)}
                        px= {2}
                        py={2}
                        borderRadius={5}
                        {...(selectedCategory.strCategory == cat.strCategory && selectedProps)}
                        _hover={{
                            color: selectedCategory.strCategory == cat.strCategory ? 'white' : 'blue.500',
                            textDecoration: "none"
                        }}
                    >
                        {cat.strCategory}
                    </Link>
                ))}
            </VStack>
        </>
    )
}

export default Sidenav
