import { Container, SkeletonText } from "@chakra-ui/react";

function RecipeModalLoading() {
  return (
    <Container>
      <SkeletonText
        mt="4"
        mb="5"
        noOfLines={1}
        spacing="4"
        skeletonHeight="8"
      />
      <SkeletonText
        noOfLines={1}
        spacing="4"
        skeletonHeight="280"
        borderRadius={200}
      />
      <SkeletonText mt="4" noOfLines={5} spacing="4" skeletonHeight="2" />
    </Container>
  );
}

export default RecipeModalLoading;
