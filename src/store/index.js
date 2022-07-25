import { configureStore } from '@reduxjs/toolkit'
import characterSlices from './slices/characterSlices';

 const store = configureStore({
    reducer: {
      characters: characterSlices
    }
});

export default store



