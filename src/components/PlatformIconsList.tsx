import { HStack, Icon} from '@chakra-ui/react';
import { Platform } from '../hooks/useGames';
import {
  FaWindows,
  FaPlaystation,
  FaLinux,
  FaXbox,
  FaAndroid,
  FaApple,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons';

interface Props {
  platforms: Platform[];
}

const PlatformIconsList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    android: FaAndroid,
    linux: FaLinux,
    mac: FaApple,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <>
      <HStack marginY={1}>
        {platforms.map((platform) => (
          <Icon color="gray.500" key={platform.id} as={iconMap[platform.slug]} />
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconsList;
