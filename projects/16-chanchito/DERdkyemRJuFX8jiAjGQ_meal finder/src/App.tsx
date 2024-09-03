import { Grid, GridItem, Show, useDisclosure } from "@chakra-ui/react";
import SideNav from "./components/SideNav";
import useMain from "./hooks/useMain";
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import RecipeModal from "./components/RecipeModal";
import { Meal } from "./types";

function App() {
  const {
    categories,
    categoryLoading,
    setSelectedCategory,
    selectedCategory,
    mealsLoading,
    meals,
    searchMeal,
    searchRecipeData,
    recipeData,
    recipeLoading,
  } = useMain();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const openRecipe = (meal: Meal) => {
    onOpen();
    searchRecipeData(meal.idMeal);
  };

  return (
    <>
      <Grid
        templateAreas={`"header header"
                        "nav main"`}
        gridTemplateRows={"60px 1fr"}
        gridTemplateColumns={{ md: `250px 1fr`, sm: `0 1fr` }}
        fontSize={14}
      >
        <GridItem
          boxShadow="lg"
          pos="sticky"
          top="0"
          pt="7px"
          zIndex="1"
          bg="white"
          area={"header"}
        >
          <Header onSubmit={searchMeal} />
        </GridItem>
        <GridItem
          p="5"
          area={"nav"}
          pos="sticky"
          height="calc(100vh - 60px)"
          top="60px"
          left="0"
          overflowY="auto"
        >
          <Show above="md">
            <SideNav
              loading={categoryLoading}
              selectCategory={setSelectedCategory}
              selectedCategory={selectedCategory}
              categories={categories}
            />
          </Show>
        </GridItem>
        <GridItem p="4" area={"main"} bg="gray.100">
          <MainContent
            openMeal={openRecipe}
            loading={mealsLoading}
            meals={meals}
          />
        </GridItem>
      </Grid>
      <RecipeModal
        data={recipeData?.meals[0]}
        loading={recipeLoading}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
}

export default App;
