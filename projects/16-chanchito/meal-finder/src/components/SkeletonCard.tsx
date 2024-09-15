import { Card, CardBody, SkeletonText } from '@chakra-ui/react'


function SkeletonCard() {
    return (
        <Card maxW="sm" boxShadow="lg">
            <CardBody>
                <SkeletonText mt='1' noOfLines={1} spacing='6' skeletonHeight='220' />
                <SkeletonText mt='4' noOfLines={2} spacing='3' skeletonHeight='2' />
            </CardBody>
        </Card>
    )
}

export default SkeletonCard
