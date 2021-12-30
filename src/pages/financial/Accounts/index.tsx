import React, { useEffect } from 'react';
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  onSnapshot,
} from 'firebase/firestore';
import { v4 } from 'uuid';
import {
  Box,
  Breadcrumbs,
  Button,
  Drawer,
  TextField,
  Typography,
} from '@material-ui/core';

interface Account {
  id: string;
  name: string;
}

const Accounts: React.FC = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [accounts, setAccounts] = React.useState<Account[]>([]);
  const [account, setAccount] = React.useState<Account>({} as Account);

  const db = getFirestore();

  const handleCreateAccount = () => {
    setAccount({} as Account);
    setOpenModal(true);
  };

  const handleEditAccount = (data: Account) => {
    setAccount(data);
    setOpenModal(true);
  };

  const handleCancel = () => {
    setOpenModal(false);
  };

  const hanfleConfirmAccount = async () => {
    const { id, name } = account;

    if (!id) {
      const uuid = v4();
      await setDoc(doc(db, 'accounts', uuid), {
        name,
      });
    } else {
      await setDoc(doc(db, 'accounts', id), {
        name,
      });
    }

    setOpenModal(false);
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'accounts'), snapshot => {
      const data: Account[] = [];
      snapshot.forEach(docAccount => {
        data.push({
          id: docAccount.id,
          name: docAccount.data().name,
        });
      });
      setAccounts(data);
    });

    return () => unsubscribe();
  }, [db]);

  return (
    <>
      <Box>
        <Breadcrumbs
          style={{
            paddingBottom: '2rem',
          }}
        >
          <Typography>Financeiro</Typography>
          <Typography>Contas</Typography>
        </Breadcrumbs>

        <Box>
          <Button
            color="primary"
            variant="outlined"
            onClick={handleCreateAccount}
          >
            Nova conta
          </Button>
        </Box>

        <Box
          style={{
            marginTop: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {accounts.map(item => (
            <Box
              key={item.id}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <Typography>{item.name}</Typography>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => handleEditAccount(item)}
              >
                Editar
              </Button>
            </Box>
          ))}
        </Box>
      </Box>

      <Drawer anchor="right" open={openModal}>
        <Box
          style={{
            width: '480px',
            display: 'flex',
            flexDirection: 'column',
            padding: '2rem',
            gap: '1rem',
          }}
        >
          <Typography variant="h6">
            {account.id ? 'Editar conta' : 'Nova conta'}
          </Typography>

          <TextField
            name="name"
            label="Nome"
            variant="outlined"
            fullWidth
            value={account.name}
            onChange={e => setAccount({ ...account, name: e.target.value })}
          />

          <Box
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '1rem',
            }}
          >
            <Button variant="outlined" color="secondary" onClick={handleCancel}>
              cacelar
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={hanfleConfirmAccount}
            >
              {account.id ? 'Editar' : 'Criar'}
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Accounts;
