import React from 'react';
import { useState } from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';


import useStyles from './styles.js';

const PlaceDetails = ({ place, selected, refProp }) => {
  const [portasLargas, setPortasLargas] = useState(false);
  const [banheiro, setBanheiro] = useState(false);
  const [rampa, setRampa] = useState(false);
  const [elevador, setElevador] = useState(false);
  const [pisoTatil, setPisoTatil] = useState(false);
  const [vagaEstacionamento, setVagaEstacionamento] = useState(false);

  if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const classes = useStyles();

  function reportAcessibility(placeId) {
    const acessibility = {
      "placeAcessibilityId": placeId,
      "portasLargas": portasLargas,
      "banheiro": banheiro,
      "rampa": rampa,
      "elevador": elevador,
      "pisoTatil": pisoTatil,
      "vagaEstacionamento": vagaEstacionamento
    };

    console.log('acessibility:', acessibility);
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
          <Typography component="legend">{place.num_reviews} review{place.num_reviews > 1 && 's'}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <FormGroup>
            <Typography gutterBottom variant="h6">Reportar itens de acessibilidade</Typography>
            <FormControlLabel control={<Checkbox onChange={e => setPortasLargas(e.target.checked)} />} label="Portas Largas" />
            <FormControlLabel control={<Checkbox onChange={e => setElevador(e.target.checked)} />} label="Elevador" />
            <FormControlLabel control={<Checkbox onChange={e => setRampa(e.target.checked)} />} label="Rampa" />
            <FormControlLabel control={<Checkbox onChange={e => setBanheiro(e.target.checked)} />} label="Banheiro acessível" />
            <FormControlLabel control={<Checkbox onChange={e => setPisoTatil(e.target.checked)} />} label="Piso Tátil" />
            <FormControlLabel control={<Checkbox onChange={e => setVagaEstacionamento(e.target.checked)} />} label="Vaga estacionamento acessível " />
            <Button variant="outlined" onClick={() => reportAcessibility(place.location_id)}>Reportar</Button>
          </FormGroup>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Preço</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Ranqueado como</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award) => (
          <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
            <img src={award.images.small} alt="Award" />
            <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
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
      <CardActions>
        <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
          Trip Advisor
        </Button>
        <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
          Website
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlaceDetails;
