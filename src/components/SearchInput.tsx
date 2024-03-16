import { Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FormEvent, useState } from 'react';
import { CiSearch } from 'react-icons/ci';

interface Props {
  onSearch: (searchTerm: string) => void;
}
const SearchInput = ({ onSearch }: Props) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSearch(searchTerm);
      }}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Icon as={CiSearch} boxSize="1.4em" />
        </InputLeftElement>
        <Input
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          value={searchTerm}
          borderRadius={20}
          placeholder="Search Games"
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
