import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/gene.svg';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (searchTerm: string) => void;
}
const Navbar = ({onSearch}: Props) => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch}/>
       <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
