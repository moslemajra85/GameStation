import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformIconsList from './PlatformIconsList';
import CriticScore from './CriticScore';
 import GameCardContainer from './GameCardContainer';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <GameCardContainer>
      <Card>
        <Image
          objectFit="cover"
          src={game.background_image}
        />
        <CardBody>
          <HStack justifyContent={'space-between'} marginBottom={3}>
            <PlatformIconsList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="xl">{game.name}</Heading>
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};

export default GameCard;
