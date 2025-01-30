import { Container, SkeletonText } from '@chakra-ui/react'


type Props = {}

const RecipeModalSkeleton = ({}: Props) => {
  return (
      <Container>
          <SkeletonText mt={4} mb={5} noOfLines={1} skeletonHeight={8} />
          <SkeletonText mt={4} mb={5} borderRadius={200} noOfLines={1} skeletonHeight={280} />
          <SkeletonText mt={4} mb={5}   noOfLines={5} />
    </Container>
  )
}

export default RecipeModalSkeleton ;