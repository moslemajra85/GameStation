import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

interface SortOrder {
  value: string;
  label: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders: SortOrder[] = [
    {
      value: '',
      label: 'Relevance',
    },
    {
      value: '-added',
      label: 'Date added',
    },
    {
      value: 'name',
      label: 'Name',
    },
    {
      value: 'release',
      label: 'Release Date',
    },
    {
      value: 'metacritic',
      label: 'Popularity',
    },
    {
      value: '-rating',
      label: 'Average rating',
    },
  ];

  const item = sortOrders.find((or) => or.value == sortOrder);
  const renderedLabel = item ? item.label : 'Order By: Relevance';
  return (
    <Box marginLeft={4}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {renderedLabel}
        </MenuButton>
        <MenuList>
          {sortOrders.map((order) => (
            <MenuItem
              onClick={() => onSelectSortOrder(order.value)}
              key={order.value}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default SortSelector;
