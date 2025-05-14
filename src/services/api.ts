import axios from 'axios';
import { getDocs, collection } from '@firebase/firestore'
import { getFirestoreInstance } from '@/services/firebaseconfig';
const firestoreDb = getFirestoreInstance();
const API_BASE_URL = 'https://stein-unlimited.cloudfunctions.net/api';

// Admin Use
export async function getAllUsers() {
  const usersSnapshot = await getDocs(collection(firestoreDb, 'users'));
  return usersSnapshot.docs.map(doc => {
    const data = doc.data();
    return {
      uid: doc.id,
      displayName: data.displayName || '(no name)',
      email: data.email || '(no email)',
      photoURL: data.photoURL || 'https://via.placeholder.com/150',
    };
  });
}


// ✅ Update user data (POST /updateUser)
export const updateUser = async (data: Record<string, unknown>) => {
  try {
    const res = await axios.post(`${API_BASE_URL}/updateUser`, data);
    return res.data;
  } catch (error: unknown) {
    console.error('Failed to update user', error);
    throw error;
  }
};

// ✅ Get full user data (GET /getUser?uid=...)
export const getUser = async (uid: string) => {
  try {
    const res = await axios.get(`${API_BASE_URL}/getUser`, {
      params: { uid },
    });
    return res.data;
  } catch (error) {
    console.error('Failed to fetch user', error);
    throw error;
  }
};

export const updatePhotoURL = async (uid: string, photoURL: string) => {
  return updateUser({ uid, photoURL });
};

