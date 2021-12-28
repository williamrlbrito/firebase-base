import React, { useState, useEffect } from 'react';
import {
  getFirestore,
  doc,
  setDoc,
  serverTimestamp,
  collection,
  query,
  onSnapshot,
} from 'firebase/firestore';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from '@material-ui/core';
import { v4 } from 'uuid';
import { useSnackbar } from 'notistack';

interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

const Home: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleAdd = async () => {
    try {
      const db = getFirestore();

      const id = v4();
      const data = {
        name,
        email,
        createdAt: serverTimestamp(),
      };

      await setDoc(doc(db, 'users', id), data);

      enqueueSnackbar('User added', { variant: 'success' });

      setName('');
      setEmail('');
    } catch (error) {
      enqueueSnackbar('Error adding user', { variant: 'error' });
    }
  };

  useEffect(() => {
    const db = getFirestore();
    const q = query(collection(db, 'users'));
    const unsubscribe = onSnapshot(q, querySnapshot => {
      const data = querySnapshot.docs.map(userDoc => {
        return {
          id: userDoc.id,
          ...userDoc.data(),
        };
      }) as User[];

      setUsers(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Container>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <Typography variant="h2" component="h1">
          User
        </Typography>

        <TextField
          name="name"
          label="Name"
          variant="outlined"
          value={name}
          onChange={e => setName(e.target.value)}
          autoComplete="off"
        />

        <TextField
          name="email"
          label="Email"
          variant="outlined"
          value={email}
          onChange={e => setEmail(e.target.value)}
          autoComplete="off"
        />

        <Button variant="contained" color="primary" onClick={handleAdd}>
          Add
        </Button>
      </Box>

      <Box
        style={{
          marginTop: '3rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
        }}
      >
        {users.map(user => (
          <Box key={user.id}>
            <Typography variant="h3" component="h2">
              {user.name}
            </Typography>
            <Typography variant="h4" component="h2">
              {user.email}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Home;
