import { useQuery } from 'react-query';

import { client, getQueryKey } from '../common';

function getProperty({ id }) {
  return client({
    url: `properties/${id}`,
    method: 'GET',
  }).then((response) => response.data);
}

export function useProperty(
  params,
  config
) {
  const queryKey = getQueryKey('post', params);
  return useQuery(
    queryKey,
    () => getProperty(params),
    config
  );
}
