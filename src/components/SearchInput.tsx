import { Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents='none'>
      <Icon as={CiSearch} boxSize="1.4em"/>
     </InputLeftElement>
      <Input borderRadius={20} placeholder="Search Games" variant="filled" />
    </InputGroup>
  );
};

export default SearchInput;
