import { Card, CardBody, SkeletonText } from "@chakra-ui/react";

type Props = {};

function SkeletonCard({}: Props) {
  return (
    <Card boxShadow="lg">
      <CardBody>
        <SkeletonText
          noOfLines={1}
          spacing="4"
          skeletonHeight={{ sm: "150", md: "220", lg: "250", "2xl": "420" }}
          borderRadius={200}
        />
        <SkeletonText mt="4" noOfLines={2} spacing="4" skeletonHeight="2" />
      </CardBody>
    </Card>
  );
}

export default SkeletonCard;
