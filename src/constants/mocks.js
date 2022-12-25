const propertiesData = [
  {
    id: "apartment",
    name: "Apartment",
    location: ["Rajwada", "Khajrana"],
    image: require("../assets/images/apartment.jpg"),
  },
  {
    id: "farm-house",
    name: "Farm House",
    location: ["Mahalakshami Nagar", "Bangali Square"],
    image: require("../assets/images/farm-house.jpg"),
  },
  {
    id: "flat",
    name: "Flat",
    location: ["Rajwada", "Bangali Square"],
    image: require("../assets/images/flat.jpg"),
  },
  {
    id: "house",
    name: "House",
    location: ["Mahalakshami Nagar", "Khajrana"],
    image: require("../assets/images/house.jpg"),
  },
  {
    id: "multi-studio",
    name: "Multi Studio",
    location: ["Rajwada", "Khajrana", "Mahalakshami Nagar"],
    image: require("../assets/images/multi-studio.jpg"),
  },
  {
    id: "studio-apartment",
    name: "Studio Apartment",
    location: ["Rajwada", "Khajrana", "Bangali Square", "Mahalakshami Nagar"],
    image: require("../assets/images/studio-apartment.jpg"),
  },
];

const byLocationdata = [
  {
    id: "rajwada",
    name: "Rajwada",
    image: require("../assets/images/Location/rajwada-palace.jpg"),
  },
  {
    id: "bangali-square",
    name: "Bangali Square",
    image: require("../assets/images/Location/bangali-square.jpg"),
  },
  {
    id: "mahalakshami-nagar",
    name: "Mahalakshami Nagar",
    image: require("../assets/images/Location/mahalakshami-nagar.jpg"),
  },
  {
    id: "vijay-nagar",
    name: "Vijay Nagar",
    image: require("../assets/images/Location/vijay-nagar.jpg"),
  },
];

const recentlyAddedData = [
  {
    id: "image1",
    price: "12,000",
    caption: "3 BHK independent house",
    size: "2500 sq.ft.",
    image: require("../assets/images/RecentlyAdded/image-1.jpg"),
  },
  {
    id: "image2",
    price: "15,000",
    caption: "2 BHK independent house",
    size: "1200 sq.ft.",
    image: require("../assets/images/RecentlyAdded/image-2.jpg"),
  },
  {
    id: "image3",
    price: "17,000",
    caption: "4 BHK independent house",
    size: "3200 sq.ft.",
    image: require("../assets/images/RecentlyAdded/image-3.jpg"),
  },
  {
    id: "image4",
    price: "10,000",
    caption: "1 BHK independent house",
    size: "1500 sq.ft.",
    image: require("../assets/images/RecentlyAdded/image-4.jpg"),
  },
];

export { propertiesData, byLocationdata, recentlyAddedData };
