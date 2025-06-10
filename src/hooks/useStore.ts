import { create } from 'zustand';
import { StateCreator } from 'zustand';

// Counter slice
interface CounterSlice {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

type CounterSliceCreator = StateCreator<StoreState, [], [], CounterSlice>;

const createCounterSlice: CounterSliceCreator = (set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
});

// Text slice
interface TextSlice {
  text: string;
  setText: (newText: string) => void;
  clearText: () => void;
}

type TextSliceCreator = StateCreator<StoreState, [], [], TextSlice>;

const createTextSlice: TextSliceCreator = (set) => ({
  text: '',
  setText: (newText: string) => set({ text: newText }),
  clearText: () => set({ text: '' }),
});

// Combined store type
type StoreState = CounterSlice & TextSlice;

// Create the store with both slices
const useStore = create<StoreState>()((...args) => ({
  ...createCounterSlice(...args),
  ...createTextSlice(...args),
}));

// Selector hooks for better performance
export const useCounter = () => {
  const count = useStore(state => state.count);
  const increment = useStore(state => state.increment);
  const decrement = useStore(state => state.decrement);
  const reset = useStore(state => state.reset);
  
  return { count, increment, decrement, reset };
};

export const useText = () => {
  const text = useStore(state => state.text);
  const setText = useStore(state => state.setText);
  const clearText = useStore(state => state.clearText);
  
  return { text, setText, clearText };
};

export default useStore;
