import {
  Button,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { IoMdSearch } from "react-icons/io";
import { HeaderSearchForm } from "../types";

type Props = {
  onSubmit: (data: HeaderSearchForm) => void;
};

function Header({ onSubmit }: Props) {
  const { register, handleSubmit, formState } = useForm<HeaderSearchForm>();

  return (
    <Container mt="1" maxW="3xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <IoMdSearch color="gray" />
          </InputLeftElement>
          <Input
            focusBorderColor={
              !!formState.errors.search ? "crimson" : "blue.400"
            }
            isInvalid={!!formState.errors.search}
            {...register("search", { required: true })}
            mr="2"
            type="text"
            placeholder="Intenta con 'chicken' o 'beans'"
          />{" "}
          <Button type="submit" color="white" bgColor="blue.400">
            Buscar
          </Button>
        </InputGroup>
      </form>
    </Container>
  );
}

export default Header;
