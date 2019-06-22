import React from 'react';
import Map from 'src/components/Home/Info/Map';

import './info.scss';

const Info = () => (
  <div id="info">
    <p className="info-title">Information</p>
    <div className="section-info">
      <div className="section-info-text">
        <p className="section-info-text-bold">Adresse</p>
        <p className="section-info-text-marg">14 rue Louis Blanc <br /> 76000 Rouen</p>
        <p className="section-info-text-bold">Email</p>
        <a href="mailto:contact@pixelcafe.com" className="section-info-text-marg">contact@pixelcafe.com</a>
        <p className="section-info-text-bold">Téléphone</p>
        <p className="section-info-text-marg">01 02 03 04 05</p>
        <p className="section-info-text-bold-horaire">Horaires:</p>
        <p className="section-info-text-bold">Mardi au vendredi</p>
        <p className="section-info-text-marg">8h à 22h30</p>
        <p className="section-info-text-bold">samedi</p>
        <p className="section-info-text-marg">13 à 00h</p>
      </div>
      <div className="section-info-map">
        <Map />
      </div>
    </div>
  </div>
);


export default Info;
