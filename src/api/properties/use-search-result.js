import { useQuery } from 'react-query';

import { client, getQueryKey } from '../common';

// To be removed once API server is live
const mimicGetSearchResult = async () => {
  const data = [
    {
      id: "image1",
      price: "12,000",
      caption: "3 BHK independent house",
      size: "2500 sq.ft.",
      location: 'Vijay Nagar, indore',
      image: require("../../assets/images/RecentlyAdded/image-1.jpg"),
    },
    {
      id: "image2",
      price: "15,000",
      caption: "2 BHK independent house",
      size: "1200 sq.ft.",
      location: 'Vijay Nagar, indore',
      image: require("../../assets/images/RecentlyAdded/image-2.jpg"),
    },
    {
      id: "image3",
      price: "17,000",
      caption: "4 BHK independent house",
      size: "3200 sq.ft.",
      location: 'Vijay Nagar, indore',
      image: require("../../assets/images/RecentlyAdded/image-3.jpg"),
    },
    {
      id: "image4",
      price: "10,000",
      caption: "1 BHK independent house",
      size: "1500 sq.ft.",
      location: 'Vijay Nagar, indore',
      image: require("../../assets/images/RecentlyAdded/image-4.jpg"),
    },
    {
      id: "image5",
      price: "12,000",
      caption: "3 BHK independent house",
      size: "2500 sq.ft.",
      location: 'Vijay Nagar, indore',
      image: require("../../assets/images/RecentlyAdded/image-1.jpg"),
    },
    {
      id: "image6",
      price: "15,000",
      caption: "2 BHK independent house",
      size: "1200 sq.ft.",
      location: 'Vijay Nagar, indore',
      image: require("../../assets/images/RecentlyAdded/image-2.jpg"),
    },
    {
      id: "image7",
      price: "17,000",
      caption: "4 BHK independent house",
      size: "3200 sq.ft.",
      location: 'Vijay Nagar, indore',
      image: require("../../assets/images/RecentlyAdded/image-3.jpg"),
    },
    {
      id: "image8",
      price: "10,000",
      caption: "1 BHK independent house",
      size: "1500 sq.ft.",
      location: 'Vijay Nagar, indore',
      image: require("../../assets/images/RecentlyAdded/image-4.jpg"),
    },
  ];
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 5000);
  });
}

const getSearchResult = async () => {
  return client({
    url: 'recent',
    method: 'GET',
  }).then((response) => response.json());
}

export function useSearchResult(config) {
  const queryKey = getQueryKey('recent');
  return useQuery(queryKey, mimicGetSearchResult, config);
}
