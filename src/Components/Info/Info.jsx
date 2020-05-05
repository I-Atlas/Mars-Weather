import React from 'react';
// Styles
import { InfoStyles } from './Info.styles';

const Info = () => (
  <InfoStyles>
    <h2>InSight — Studying the 'Inner Space' of Mars</h2>
    <p>
      InSight is taking daily weather measurements (temperature, wind, pressure)
      on the surface of Mars at Elysium Planitia, a flat, smooth plain near
      Mars’ equator.
    </p>
    <p>
      You can find more information about the InSight mission {' '}
      <a href='https://mars.nasa.gov/insight/'>here</a>.
    </p>
  </InfoStyles>
);

export default Info;