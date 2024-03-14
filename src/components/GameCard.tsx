import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformIconsList from './PlatformIconsList';
import CriticScore from './CriticScore';
import cropImage from '../services/image-url';

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card width="300px" borderRadius={10} overflow="hidden">
      <Image
        objectFit="cover"
        src={cropImage(game.background_image, 600, 400)}
      />
      <CardBody>
        <Heading fontSize="xl">{game.name}</Heading>
        <HStack justifyContent={'space-between'}>
          <PlatformIconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
