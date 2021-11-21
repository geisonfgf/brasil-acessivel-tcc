import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Logo from '../../assets/brasil_accessivel_logo.png';

import useStyles from './styles.js';

const Header = ({ onPlaceChanged, onLoad }) => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="primary">
      <Toolbar className={classes.toolbar}>
        <Box display="flex">
          <Box component="img" sm={{ height: 32, }} alt="Brasil Acessível logo" src={Logo} />
          <Typography variant="h5" className={classes.title}>
            Brasil Acessível
          </Typography>
        </Box>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Busque lugares acessíveis
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Procurar…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
