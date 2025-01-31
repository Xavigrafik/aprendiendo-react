import { Card, CardBody, SkeletonText, Spinner, Stack, HStack, Box } from '@chakra-ui/react'

function MealCardSkeleton() {
    return (
        <Card maxW="sm" boxShadow="lg">
            <CardBody>
                
                {/* TESTING SPINNER */}
                <Box w="100%" h={220} bg="gray.200"  display='flex' alignItems='center' justifyContent='center'>
                    <Spinner size="lg"/>
                </Box>
                
                {/* <SkeletonText noOfLines={1} skeletonHeight={220}></SkeletonText> */}
                <SkeletonText mt={4} mb={2} noOfLines={1} skeletonHeight={5} />
                <SkeletonText mt={4} mb={2} noOfLines={4} spacing={2} skeletonHeight={2} />

            </CardBody>
        </Card>
    )
}

export default MealCardSkeleton
