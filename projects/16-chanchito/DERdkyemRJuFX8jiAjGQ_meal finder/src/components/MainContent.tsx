import { SimpleGrid } from "@chakra-ui/react";
import { Meal } from "../types";
import SkeletonCard from "./SkeletonCard";
import MealCard from "./MealCard";

type Props = {
  loading: boolean;
  openMeal: (meal: Meal) => void;
  meals?: Meal[];
};

function MainContent({ loading, meals, openMeal }: Props) {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <SimpleGrid columns={{ lg: 3, sm: 2 }} spacingX="20px" spacingY="20px">
      {loading && skeletons.map((skeleton) => <SkeletonCard key={skeleton} />)}
      {!loading &&
        meals?.map((meal) => (
          <MealCard
            openMeal={() => openMeal(meal)}
            key={meal.idMeal}
            photo={meal.strMealThumb}
            text={meal.strMeal}
          />
        ))}
    </SimpleGrid>
  );
}

export default MainContent;
