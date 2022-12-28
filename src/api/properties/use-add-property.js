import { useMutation } from 'react-query';
import { client } from '../common';

const addProperty = async (input) => {
  const response = await client({
    url: 'properties',
    method: 'POST',
    data: input
  });
  return response.data;
};

export function useAddProperty(config) {
  return useMutation(addProperty, config);
}
