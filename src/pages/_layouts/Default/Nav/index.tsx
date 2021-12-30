import React, { useEffect } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import MoneyIcon from '@material-ui/icons/Money';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { useHistory, useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }),
);

const Nav: React.FC = () => {
  const classes = useStyles();
  const [openFinancial, setOpenFinancial] = React.useState(false);

  const { pathname } = useLocation();
  const history = useHistory();

  const financialMenus = [
    {
      name: 'Dashboard',
      path: '/financial/dashboard',
    },
    {
      name: 'Contas',
      path: '/financial/accounts',
    },
    {
      name: 'Categorias',
      path: '/financial/categories',
    },
    {
      name: 'Centros de custo',
      path: '/financial/costcenters',
    },
    {
      name: 'Documentos de origem',
      path: '/financial/sourcedocuments',
    },
    {
      name: 'Contas a pagar',
      path: '/financial/billstopay',
    },
    {
      name: 'Contas a receber',
      path: '/financial/billstoreceive',
    },
  ];

  const handleClick = () => {
    setOpenFinancial(!openFinancial);
  };

  useEffect(() => {
    if (pathname.includes('financial')) {
      setOpenFinancial(true);
    }
  }, [pathname]);

  return (
    <List>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <MoneyIcon />
        </ListItemIcon>
        <ListItemText primary="Financeiro" />
        {openFinancial ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openFinancial} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {financialMenus.map(menu => (
            <ListItem
              key={menu.name}
              button
              className={classes.nested}
              selected={pathname === menu.path}
              onClick={() => history.push(menu.path)}
            >
              <ListItemText primary={menu.name} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </List>
  );
};

export default Nav;
