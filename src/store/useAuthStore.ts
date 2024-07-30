import { login as loginService } from '@/services/auth.services';
import { LoginPayLoad } from '@/types/auth.type';
import { create } from 'zustand';

export type AuthState = {
  isLogged: boolean;
  userId: number;
  email: string;
  role: string;
  accessToken: string;
  refreshToken: string;
  username: string;
};

export type State = {
  loading: boolean;
  credentials: AuthState;
};

type Action = {
  login: (payload: LoginPayLoad) => void;
  logout: () => void;
  setCredentials: (payload: AuthState) => void;
  resetCredentials: () => void;
  reset: () => void;
};

const initialState: State = {
  loading: false,
  credentials: {
    isLogged: false,
    userId: 0,
    email: '',
    role: '',
    accessToken: '',
    refreshToken: '',
    username: ''
  }
};

const useAuthStore = create<State & Action>()((set) => ({
  ...initialState,
  login: async (payload) => {
    set((state) => ({ ...state, loading: true }));
    try {
      const { data } = await loginService(payload);

      localStorage.setItem('auth', JSON.stringify({ ...data, isLogged: true }));
      set(() => ({ credentials: { ...data, isLogged: true } }));
    } catch (error) {
      throw error;
    } finally {
      set(() => ({ loading: false }));
    }
  },
  logout: () => {
    set(() => ({ ...initialState }));
  },
  setCredentials: (payload) => {
    set((state) => ({
      ...state,
      credentials: {
        ...payload
      }
    }));
  },
  resetCredentials: () => {
    set((state) => ({
      ...state,
      credentials: {
        ...initialState.credentials
      }
    }));
  },
  reset: () => set(() => ({ ...initialState }))
}));

export default useAuthStore;
