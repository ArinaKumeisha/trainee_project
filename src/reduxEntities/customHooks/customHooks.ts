import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from 'reduxEntities/index';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppMainSelector: TypedUseSelectorHook<RootState> = useSelector;
