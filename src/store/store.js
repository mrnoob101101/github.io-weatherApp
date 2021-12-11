import { configureStore } from '@reduxjs/toolkit';
import TestReducer from "./testreduser";

export const store = configureStore({ reducer: TestReducer })
