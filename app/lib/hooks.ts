import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './store/store';

// use hooks so we have the typed versions of useDispatch and useSelector
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
