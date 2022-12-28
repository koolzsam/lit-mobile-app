import { useQuery } from 'react-query';

import { client, getQueryKey } from '../common';

// To be removed once API server is live
const mimicGetAvailableLocations = async () => {
  const data = [
    {
      id: "rajwada",
      name: "Rajwada",
      image: require("../../assets/images/Location/rajwada-palace.jpg"),
    },
    {
      id: "bangali-square",
      name: "Bangali Square",
      image: require("../../assets/images/Location/bangali-square.jpg"),
    },
    {
      id: "mahalakshami-nagar",
      name: "Mahalakshami Nagar",
      image: require("../../assets/images/Location/mahalakshami-nagar.jpg"),
    },
    {
      id: "vijay-nagar",
      name: "Vijay Nagar",
      image: require("../../assets/images/Location/vijay-nagar.jpg"),
    },
  ];
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 5000);
  });
}

const getAvailableLocations = async () => {
  return client({
    url: 'locations',
    method: 'GET',
  }).then((response) => response.json());
}

export function usePropertyLocations(config) {
  const queryKey = getQueryKey('locations');
  return useQuery(queryKey, mimicGetAvailableLocations, config);
}
