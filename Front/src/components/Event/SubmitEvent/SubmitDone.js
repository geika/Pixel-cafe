import React from 'react';
import PropTypes from 'prop-types';

import './submit-event.scss';

const SubmitDone = ({ reloadEventView }) => {
  const setNewEventView = () => {
    reloadEventView();
  };
  return (
    <div className="submit-event">
      <div className="submit-event-submit">
        <p className="submit-event-submit-title">Votre demande d'évènement nous a bien été soumis.</p>
        <p className="submit-event-submit-content">Nous allons proceder a l'étude de votre évènement dans un delai  de 7 jours .  </p>
        <p className="submit-event-submit-content">N'oubliez pas de consulter notre page d'évènement afin d'etre informer si votre évènement a bien été retenu par notre équipe.  </p>
        <button className="submit-event-submit-button" onClick={setNewEventView} type="submit">Soumètre un nouvel évènement</button>
      </div>
    </div>
  );
};

SubmitDone.propTypes = {
  reloadEventView: PropTypes.func.isRequired,
};


export default SubmitDone;
