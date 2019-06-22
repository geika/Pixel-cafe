import React, { useEffect } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
import ScrollToBottom from 'react-scroll-to-bottom';

import VoteEvent from './VoteEvent';
import CommentField from './CommentField';
import './event.scss';

const uuid = require('uuid-v4');

const WatchEvent = ({
  data,
  sendMsg,
  getDataEvents,
  sendVote,
  isConnected,
}) => {
  useEffect(() => {
    getDataEvents();
  }, []);
  return (
    <div id="watch-event">
      {data.map(event => (
        <div key={uuid()} className="event-box">
          <div className="event-filter">
            <img className="event-filter-img" src={`src/images/${event.style}.jpg`} alt={event.style} />
          </div>
          <div className="event-description">
            <p className="event-description-date">{event.date.substring(0, 11)}</p>
            <p className="event-description-name">{event.name}</p>
            <p className="event-description-desc">{event.description}</p>
            <p className="event-description-numb">Nombre de Participants: {event.nbParticipants}</p>
          </div>
          <VoteEvent
            sendVote={sendVote}
            eventId={event.id}
            nbVotes={event.vote}
            isConnected={isConnected}
          />
          <div className="event-coments">
            <ScrollToBottom className="event-coments-list">
              {event.comments.map(comment => (
                <div key={uuid()} className="event-coments-msg">
                  <p className="event-coments-user"><FaUserAlt /> {comment.username}</p>
                  <p>{comment[0].content}</p>
                </div>
              ))}
            </ScrollToBottom>
            <CommentField eventId={event.id} sendMsg={sendMsg} />
          </div>
        </div>
      ))}
    </div>
  );
};

WatchEvent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  sendMsg: PropTypes.func.isRequired,
  getDataEvents: PropTypes.func.isRequired,
  sendVote: PropTypes.func.isRequired,
  isConnected: PropTypes.bool.isRequired,
};


export default WatchEvent;
