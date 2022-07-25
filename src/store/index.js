import { configureStore } from '@reduxjs/toolkit'
import characterSlices from './slices/characterSlices';

 const store = configureStore({
    reducer: {
      characters: characterSlices
    }
});

export default store



//exports debe ser con {}
// exports default sin {}


