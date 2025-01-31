import { Button, Container, Input, InputGroup, InputLeftElement, } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { IoMdSearch } from "react-icons/io";
import { HeaderSearchForm, SearchForm } from "../types";


type Props = {
    onSubmit: (data: HeaderSearchForm) => void;
};

function Header({ onSubmit }: Props) {
    
    const { register, formState, handleSubmit } = useForm<SearchForm>();

    return (
        <Container maxW="3xl" mt="1">
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup>
                    <InputLeftElement pointerEvents="none" >
                        <IoMdSearch></IoMdSearch>
                    </InputLeftElement>
                    <Input
                        mr='3'
                        type="text"
                        bgColor={'white'}
                        placeholder="Introduce búsqueda..."
                        size="md"
                        isInvalid={!!formState.errors.search}
                        focusBorderColor={formState.errors.search ? 'crimson' : 'blue.400'}
                        {...register('search', { required: true })}
                    />
                    <Button type="submit" bgColor="blue.400" color="white">Buscar</Button>
                </InputGroup>
                </form>
        </Container>
    )
}

export default Header
