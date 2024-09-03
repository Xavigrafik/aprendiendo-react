import { Heading, SkeletonText } from "@chakra-ui/react";
import Categories from "./Categories";
import { Category } from "../types";

type Props = {
  loading: boolean;
  selectCategory: (category: Category) => void;
  selectedCategory: Category | undefined;
  categories: Category[];
};

function SideNav({
  loading,
  selectCategory,
  selectedCategory,
  categories,
}: Props) {
  return loading ? (
    <SkeletonText mt="1" noOfLines={8} spacing="6" skeletonHeight="2" />
  ) : (
    <>
      <Heading color="blue.400" fontSize={12} fontWeight="bold" mb={4}>
        CATEGORIAS
      </Heading>
      <Categories
        onClick={selectCategory}
        selected={selectedCategory}
        data={categories}
      />
    </>
  );
}

export default SideNav;
