import { UserInfo } from '@/models/user.model';
import {
  clearLocalStorage,
  persistLocalStorage,
} from '@/utilities/localStorage/localStorage.utils';
import { createSlice } from '@reduxjs/toolkit';

export const emptyUserState: UserInfo = {
  _id: '',
  name: '',
  email: '',
  avatarUrl: '',
  rol: '',
  accessToken: '',
};

export const userKey = 'user';

export const userSlice = createSlice({
  name: 'user',
  initialState: localStorage.getItem(userKey)
    ? JSON.parse(localStorage.getItem(userKey) as string)
    : emptyUserState,
  reducers: {
    createUser: (_state, action) => {
      console.log('createUser action payload:', action.payload);
      persistLocalStorage<UserInfo>(userKey, action.payload);
      return action.payload;
    },
    updateUser: (state, action) => {
      const result = { ...state, ...action.payload };
      persistLocalStorage<UserInfo>(userKey, result);
      return result;
    },
    resetUser: () => {
      clearLocalStorage(userKey);
      return emptyUserState;
    },
  },
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
