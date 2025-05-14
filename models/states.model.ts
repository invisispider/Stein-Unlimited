export type StyleName = "struggles"|"flowers"|"elders"|"vivid"|"peace"|"harvests"|"hallows"|"feasts"

export type RootState = {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
  bio: string;
  website: string;
  level: string;
  state: string;
  type: string;
  quadrant: string;
  userCreated: string; // ISO date string
  userUpdated: string;
  lastLogin: string;
  isBanned: boolean;
  roles: string[];
  styleMode: StyleName;
  isIn: boolean;
  authIsReady: boolean;
  admin: boolean;
  points: number;
}
