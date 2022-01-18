import firebase from 'firebase/compat';
import UserInfo = firebase.UserInfo;

export interface User extends Pick<UserInfo, 'displayName' | 'uid' | 'email' | 'photoURL'> {}
