import create from 'zustand';
import { getToken, removeToken, setToken } from './utils';


export const useAuth = create((set, get) => ({
  status: 'idle',
  token: null,
  signIn: (token) => {
    setToken(token);
    set({ status: 'signIn', token });
  },
  signOut: () => {
    removeToken();
    set({ status: 'signOut', token: null });
  },
  hydrate: () => {
    try {
      const userToken = getToken();
      if (userToken !== null) {
        get().signIn(userToken);
      } else {
        get().signOut();
      }
    } catch (e) {
      // catch error here
      // Maybe sign_out user!
    }
  },
  skipLogin: () => {
    set({ status: 'anonymous', token: null });
  },
}));

export const signOut = () => useAuth.getState().signOut();
export const signIn = (token) => useAuth.getState().signIn(token);
export const hydrateAuth = () => useAuth.getState().hydrate();
export const skipLogin = () => useAuth.getState().skipLogin();
