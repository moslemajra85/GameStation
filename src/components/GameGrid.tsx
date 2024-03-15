import { SimpleGrid, Text} from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import { Genre } from '../hooks/useGenres';


interface Props {
  selectedGenre: Genre | null
}
const GameGrid = ({selectedGenre}: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre);

  const cardSkeletons = [1, 2, 3, 4, 5, 6].map((_, index) => <GameCardSkeleton key={index}/>);

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 5,
        }}
        padding="10px"
        spacing={3}
      >
        {isLoading && cardSkeletons}
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
