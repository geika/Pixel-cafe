import React, { useState } from 'react';

import './event.scss';
import WatchEvent from 'src/containers/WatchEvent';
import SubmitEvent from 'src/containers/SubmitEvent';

const Event = () => {
  const [view, setView] = useState('watch');

  return (
    <div id="event">
      <div className="button_box">
        <button
          className={`event-button${view === 'watch' ? '' : '-inactive'} left ripple`}
          type="button"
          onClick={() => setView('watch')}
        >
        Voir les événements
        </button>
        <button
          className={`event-button${view === 'submit' ? '' : '-inactive'} right ripple`}
          type="button"
          onClick={() => setView('submit')}
        >
        Soummettre un événement
        </button>
      </div>
      {view === 'watch' && (
      <WatchEvent /> 
      )} 
      { view === 'submit' && (
      <SubmitEvent />
      )}
    </div>
  );
};

export default Event;
