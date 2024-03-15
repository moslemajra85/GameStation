import useData from './useData';

interface Platorm {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => useData<Platorm>('/platforms/lists/parents');

export default usePlatforms;
