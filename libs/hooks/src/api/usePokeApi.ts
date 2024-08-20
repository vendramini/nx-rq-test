import { useQuery } from '@tanstack/react-query';

export const usePokeApi = () => useQuery({
  queryKey: ['pokeapi-lib'],
  queryFn: () => fetch('https://pokeapi.co/api/v2/pokemon/ditto').then((res) => res.json()),
});
