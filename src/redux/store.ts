import { UserInfo } from '@/models/user.model';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user.slice';

export interface AppStore {
  user: UserInfo;
}

export default configureStore<AppStore>({
  reducer: {
    user: userReducer,
  },
});
