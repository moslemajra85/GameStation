import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/gene.svg';
import ColorModeSwitch from './ColorModeSwitch';

const Navbar = () => {
  return (
    <HStack justifyContent="space-between">
      <Image src={logo} boxSize="60px" />
       <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
