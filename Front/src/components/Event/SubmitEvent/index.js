import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Calendar from 'react-calendar';
import Moment from 'moment';

import SubmitDone from './SubmitDone';
import NotConnected from './NotConnected';
import './submit-event.scss';

const selects = [];

for (let i = 4; i <= 20; i += 2) {
  selects.push(i);
}

const SubmitEvent = ({
  sendData,
  viewForm,
  reloadEventView,
  username,
  isConnected,
}) => {
  const [style, setType] = useState(0);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [nbParticipants, setParticipants] = useState(0);
  const [date, setEventDate] = useState(new Date());
  const [errorMsg, setErrorMsg] = useState(false);

  useEffect(() => {}, [isConnected]);

  const handleType = (event) => {
    const { value } = event.target;
    setType(value);
  };

  const handleName = (event) => {
    const { value } = event.target;
    if (value.length < 40) {
      setName(value);
    }
  };

  const handleDescription = (event) => {
    const { value } = event.target;
    if (value.length < 100) {
      setDescription(value);
    }
  };

  const handleParticipant = (event) => {
    const { value } = event.target;
    setParticipants(value);
  };

  const handleDate = (eventDate) => {
    setEventDate(eventDate);
  };

  const submitData = (event) => {
    event.preventDefault();
    const eventData = {
      name,
      description,
      date: Moment(date).format('YYYY-MM-DD HH:mm:ss'),
      nbParticipants: parseInt(nbParticipants, 0),
      style: parseInt(style, 0),
    };
    if (name !== '' && description !== '' && nbParticipants !== 0 && style !== 0) {
      sendData(eventData);
    }
    else {
      setErrorMsg(true);
    }
  };

  let showView;

  if (localStorage.getItem('userName') !== null) {
    console.log(localStorage.getItem('userName'));
    showView = viewForm === true
      ? (
        <form className="submit-event-form">
          <h2 className="submit-event-title">Proposer un évènement</h2> 
          <p className="submit-event-form-label">type d'évènement :</p>
          <select className="submit-event-form-field" onChange={handleType}>
            <option value="0">entrez un type d'évènement</option>
            <option value="1">tournois</option>
            <option value="2">soirée à thème</option>
            <option value="3">concert</option>
          </select>
          <p className="submit-event-form-label">nom de l'évènement :</p>
          <input className="submit-event-form-field" onChange={handleName} value={name} type="text" placeholder="entrez un nom pour l'évènement" />
          <p className="submit-event-form-label">description :</p>
          <textarea className="submit-event-form-field-large" onChange={handleDescription} value={description} type="text" placeholder="faites une description de l'évènement" />
          <p className="submit-event-form-label">nombres de participants :</p>
          <select className="submit-event-form-field" onChange={handleParticipant} name="nombres de participants">
            <option value="0">sélèctionnez le nombres de participants</option>
            {selects.map(select => <option value={select}>{select}</option>)}
          </select>
          <p className="submit-event-form-label">date de l'évènement :</p>
          <Calendar className="submit-event-form" onChange={handleDate} value={date} />
          {errorMsg === true ? <p className="event-error">Veuillez vérifier que vous avez bien rempli tout les champs !</p> : null}
          <button className="submit-event-form-button" type="submit" onClick={submitData}>envoyer</button>
        </form>
      ) : <SubmitDone reloadEventView={reloadEventView} />;
  }
  else {
    showView = <NotConnected />;
  }

  return (
    <div className="submit-event">
      {showView}
    </div>
  );
};

SubmitEvent.propTypes = {
  sendData: PropTypes.func.isRequired,
  viewForm: PropTypes.bool.isRequired,
  reloadEventView: PropTypes.func.isRequired,
  isConnected: PropTypes.bool.isRequired,
};

export default SubmitEvent;
