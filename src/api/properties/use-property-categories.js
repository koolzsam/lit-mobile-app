import { useQuery } from 'react-query';

import { client, getQueryKey } from '../common';

// To be removed once API server is live
const mimicGetPropertyCategories = async () => {
  const data = [
    {
      id: "apartment",
      name: "Apartment",
      location: ["Rajwada", "Khajrana"],
      image: require("../../assets/images/apartment.jpg"),
    },
    {
      id: "farm-house",
      name: "Farm House",
      location: ["Mahalakshami Nagar", "Bangali Square"],
      image: require("../../assets/images/farm-house.jpg"),
    },
    {
      id: "flat",
      name: "Flat",
      location: ["Rajwada", "Bangali Square"],
      image: require("../../assets/images/flat.jpg"),
    },
    {
      id: "house",
      name: "House",
      location: ["Mahalakshami Nagar", "Khajrana"],
      image: require("../../assets/images/house.jpg"),
    },
    {
      id: "multi-studio",
      name: "Multi Studio",
      location: ["Rajwada", "Khajrana", "Mahalakshami Nagar"],
      image: require("../../assets/images/multi-studio.jpg"),
    },
    {
      id: "studio-apartment",
      name: "Studio Apartment",
      location: ["Rajwada", "Khajrana", "Bangali Square", "Mahalakshami Nagar"],
      image: require("../../assets/images/studio-apartment.jpg"),
    },
  ];
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 5000);
  });
}

const getPropertyCategories = async () => {
  return client({
    url: `category`,
    method: 'GET',
  }).then((response) => response.json());
}

export function usePropertyCategories(config) {
  const queryKey = getQueryKey('category');
  return useQuery(queryKey, mimicGetPropertyCategories, config);
}
