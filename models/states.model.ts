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

// THIS FILE MIGHT NOT BE NECESSARY, BUT PERHAPS I NEEDED IT FOR TESTING,
//  SO IF THAT'S SO, UPDATE THE CONFIG TO READ FROM SRC/MODELS INSTEAD AND THEN DELETE THIS
//  YOU WILL KNOW BECAUSE IT WILL WANT TIMESTATE IN HERE.