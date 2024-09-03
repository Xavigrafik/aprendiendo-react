import { Link, VStack } from "@chakra-ui/react";
import { Category } from "../types";

type Props = {
  data: Category[];
  selected?: Category;
  onClick: (category: Category) => void;
};

const selectedProps = {
  bgColor: "blue.400",
  color: "white",
  fontWeight: "bold",
};

function Categories({ data, selected, onClick }: Props) {
  return (
    <VStack align="stretch">
      {data.map((d) => (
        <Link
          onClick={() => onClick(d)}
          px={2}
          py={1}
          borderRadius={5}
          _hover={{ textDecoration: "none" }}
          key={d.strCategory}
          {...(selected?.strCategory == d.strCategory && selectedProps)}
        >
          {d.strCategory}
        </Link>
      ))}
    </VStack>
  );
}

export default Categories;
