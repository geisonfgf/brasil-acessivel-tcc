import React from 'react';
import { useState } from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';

const PlaceDetails = ({ place }) => {
  const [blindness, setBlindness] = useState(false);
  const [guideDog, setGuideDog] = useState(false);
  const [hearingImpairment, setHearingImpairment] = useState(false);
  const [learningImpairment, setLearningImpairment] = useState(false);
  const [mobilityImpairment, setMobilityImpairment] = useState(false);
  const [muteness, setMuteness] = useState(false);
  const [visualImpairment, setVisualImpairment] = useState(false);
  const [wheelchair, setWheelchair] = useState(false);

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
            <FormControlLabel control={<Checkbox onChange={e => setBlindness(e.target.checked)} />} label="Pessoas que não enxergam" />
            <FormControlLabel control={<Checkbox onChange={e => setGuideDog(e.target.checked)} />} label="Cão Guia" />
            <FormControlLabel control={<Checkbox onChange={e => setHearingImpairment(e.target.checked)} />} label="Pessoa com baixa audição" />
            <FormControlLabel control={<Checkbox onChange={e => setLearningImpairment(e.target.checked)} />} label="Pessoa com dificuldades cognitivas" />
            <FormControlLabel control={<Checkbox onChange={e => setMobilityImpairment(e.target.checked)} />} label="Pessoa com baixa mobilidade" />
            <FormControlLabel control={<Checkbox onChange={e => setMuteness(e.target.checked)} />} label="Pessoa que não fala" />
            <FormControlLabel control={<Checkbox onChange={e => setVisualImpairment(e.target.checked)} />} label="Pessoa com baixa visão" />
            <FormControlLabel control={<Checkbox onChange={e => setWheelchair(e.target.checked)} />} label="Pessoa que usa cadeira de rodas" />
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
