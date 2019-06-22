import React from 'react';

import './home-event.scss';

const HomeEvent = () => (
  <div id="home-event">
    <p className="event-title">Prochainement au pixel café</p>
    <div className="event">
      <p className="event-date">18/04/2019 -19h</p>
      <div>
        <p className="event-name">Street Fighter IV (Xbox)</p>
        <p className="event-desc">Un gros tournoi de Street Fighter IV, venez defier des joueurs talentueux venu de toutes la France.</p>
      </div>
    </div>
    <div className="event">
      <p className="event-date">24/04/2019 -20h</p>
      <div>
        <p className="event-name">Concert de Johnny Hallyday</p>
        <p className="event-desc">Selon certaines source le concert devrais être annulé mais on à tout prévu, venez nombreux.</p>
      </div>
    </div>
  </div>
);


export default HomeEvent;
