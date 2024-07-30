import { create } from 'zustand';

type State = {
  count: number;
};

type Action = {
  increment: () => void;
  decrement: () => void;
};

const initialState: State = {
  count: 0
};

/**
 * @see [Zustand Documentation](https://docs.pmnd.rs/zustand/getting-started/introduction)
 *
 * Represents a custom hook for managing counter state using Zustand.
 * @returns An object containing state and actions for managing the counter state.
 */
export const useCounterStore = create<State & Action>()((set) => ({
  ...initialState,
  increment: () => {
    set((state) => ({ count: state.count++ }));
  },
  decrement: () => {
    set((state) => ({ count: state.count-- }));
  }
}));

// To use the useCounterStore hook in a component:
// 1. Import the hook at the top of the component file:
// import { useCounterStore } from './path/to/exampleStore';
// 2. In the component function, call the useCounterStore hook to access state and actions:
// const { count, increment, decrement } = useCounterStore();
