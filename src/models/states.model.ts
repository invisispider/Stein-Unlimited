export type RootState = {
  styleMode: string;
  isIn: boolean;
  authIsReady: boolean;
  uid: string;
  displayName: string;
  email: string;
  admin: boolean;
  points: number;
  photoURL: string;
  bio: string;
  website: string;
  level: string;
  state: string;
  type: string;
  quadrant: string;
  userCreated: string;
  userUpdated: string;
  lastLogin: string;
  isBanned: false;
  roles: [];
};

export type TimeState = {
  instantOfDay: number;
  now: Date;
  second: number;
  minute: number;
  hour: number;
  zhour: number;
  forma: string;
  true_h: number;
  dayOfYear: number;
  habitNum: number;
  dayNum: number;
  zYear: number;
  dayOfHabit: number;
  inputDate: string | null;
}

// NOTE: the app reads from this file, 
// but I believe in testing, we needed types 
// in the root as well