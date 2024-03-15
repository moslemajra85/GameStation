import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack padding="10px">
      <Switch colorScheme='blue' isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
      <Text whiteSpace="nowrap">{colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
