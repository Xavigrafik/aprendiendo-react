import { Container, SkeletonText } from '@chakra-ui/react'



const RecipeModalSkeleton = () => {
  return (
      <Container>
          <SkeletonText mt={5} mb={8} noOfLines={1} skeletonHeight={5} />
          <SkeletonText mt={4} mb={5} borderRadius={1000} noOfLines={1} skeletonHeight={400} />
          <SkeletonText mt={4} mb={5} noOfLines={5} spacing={2} skeletonHeight={2} startColor='teal.100' endColor='cyan.800'/>
    </Container>
  )
}

export default RecipeModalSkeleton ;