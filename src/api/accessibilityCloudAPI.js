/* eslint-disable consistent-return */
import axios from 'axios';

export const getAccessiblePlacesData = async (lat, lng, type) => {
  let params = { latitude: lat, longitude: lng, accuracy: 2000 }
  if (type) params = { latitude: lat, longitude: lng, accuracy: 2000, includeCategories: type };

  try {
    const data = await axios.get(`https://accessibility-cloud.freetls.fastly.net/place-infos?appToken=8b0f677bdf6466e72cdc4987c48bf399`, {
      params: params,
      headers: { 'Accept': 'application/json' },
    });

    return data.data.features;
  } catch (error) {
    console.log(error);
  }
};