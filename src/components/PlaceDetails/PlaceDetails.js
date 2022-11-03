import React from 'react';
import { useState } from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';

const PlaceDetails = ({ place }) => {
  const [portasLargas, setPortasLargas] = useState(false);
  const [banheiro, setBanheiro] = useState(false);
  const [rampa, setRampa] = useState(false);
  const [elevador, setElevador] = useState(false);
  const [pisoTatil, setPisoTatil] = useState(false);
  const [vagaEstacionamento, setVagaEstacionamento] = useState(false);

  const classes = useStyles();

  function reportAcessibility() {
    console.log('Local:', place);
  }

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">{place.name}</Typography>
        <Box display="flex" justifyContent="space-between" my={2}>
          <Rating name="read-only" value={Number(place.rating)} readOnly />
        </Box>
        <Box display="flex" justifyContent="space-between">
          <FormGroup>
            <Typography gutterBottom variant="h6">Local é acessível para:</Typography>
            <FormControlLabel control={<Checkbox onChange={e => setPortasLargas(e.target.checked)} />} label="Pessoas que não enxergam" />
            <FormControlLabel control={<Checkbox onChange={e => setElevador(e.target.checked)} />} label="Cão Guia" />
            <FormControlLabel control={<Checkbox onChange={e => setRampa(e.target.checked)} />} label="Pessoa com baixa audição" />
            <FormControlLabel control={<Checkbox onChange={e => setBanheiro(e.target.checked)} />} label="Pessoa com dificuldades cognitivas" />
            <FormControlLabel control={<Checkbox onChange={e => setPisoTatil(e.target.checked)} />} label="Pessoa com baixa mobilidade" />
            <FormControlLabel control={<Checkbox onChange={e => setVagaEstacionamento(e.target.checked)} />} label="Pessoa que não fala" />
            <FormControlLabel control={<Checkbox onChange={e => setVagaEstacionamento(e.target.checked)} />} label="Pessoa com baixa visão" />
            <FormControlLabel control={<Checkbox onChange={e => setVagaEstacionamento(e.target.checked)} />} label="Pessoa que usa cadeira de rodas" />
            <Button variant="outlined" onClick={() => reportAcessibility(place.location_id)}>Reportar</Button>
          </FormGroup>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Accesibilidade para cadeira de rodas</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.accessibility?.accessibleWith?.wheelchair ? "Sim" : "Não"}
          </Typography>
        </Box>
        {place.address && (
          <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
            <LocationOnIcon />{place.address}
          </Typography>
        )}
        {place.phone && (
          <Typography variant="body2" color="textSecondary" className={classes.spacing}>
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
