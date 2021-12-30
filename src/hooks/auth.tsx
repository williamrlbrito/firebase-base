import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut as signOutFirebase,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { useSnackbar } from 'notistack';

interface User {
  id: string;
  name: string;
  email: string;
  photoUrl: string | null;
}

interface SignUpCredentials {
  email: string;
  password: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  loading: boolean;
  user: User;
  signUp(credentials: SignUpCredentials): Promise<void>;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [data, setData] = useState<User>({} as User);
  const [loading, setLoading] = useState(true);

  const auth = getAuth();
  const db = getFirestore();

  const create = useCallback(
    async (user: User) => {
      const { id, ...userDoc } = user;

      await setDoc(doc(db, 'users', id), userDoc)
        .then(() => {
          setData({ id, ...userDoc });
        })
        .catch(error => {
          enqueueSnackbar(error.message, { variant: 'error' });
        });
    },
    [db, enqueueSnackbar],
  );

  const signUp = useCallback(
    async ({ email, password }: SignUpCredentials) => {
      createUserWithEmailAndPassword(auth, email, password).catch(error => {
        enqueueSnackbar(error.message, { variant: 'error' });
      });
    },
    [auth, enqueueSnackbar],
  );

  const signIn = useCallback(
    async ({ email, password }: SignInCredentials) => {
      signInWithEmailAndPassword(auth, email, password).catch(error => {
        enqueueSnackbar(error.message, { variant: 'error' });
      });
    },
    [auth, enqueueSnackbar],
  );

  const signOut = useCallback(async () => {
    signOutFirebase(auth);
  }, [auth]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async user => {
      if (user) {
        const id = user.uid;
        const docRef = doc(db, 'users', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userDoc = docSnap.data() as User;
          setData({ ...userDoc, id });
        } else {
          const userDoc = {
            name: user.displayName || '',
            email: user.email || '',
            photoUrl: user.photoURL || '',
          };

          create({ id, ...userDoc });
        }
      } else {
        setData({} as User);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth, db, create, data.id]);

  return (
    <AuthContext.Provider
      value={{
        loading,
        user: data,
        signUp,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
