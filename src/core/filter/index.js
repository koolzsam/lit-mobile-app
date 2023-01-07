import create from 'zustand';

/**
 * Custom hook to store the filter details
 * all filter components will use the relavant
 * state property from useFilter hook and 
 * utilizes the methods to update the filter
 * properties
 */
export const useFilter = create((set, get) => ({
    locations: [],
    propertyTypes: [],
    priceRange: [],
    setLocations: (locations) => {
        set({ locations });
    },
    setPropertyTypes: (propertyTypes) => {
        set({ propertyTypes });
    },
    setPriceRange: (priceRange) => {
        set({ priceRange });
    },
    getFilter: () => {
        return { 
            locations: get().locations,
            propertyTypes: get().propertyTypes, 
            priceRange: get().propertyTypes 
        };
    },
}));
