import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { TiThumbsUp } from 'react-icons/ti';

import './event.scss';

const VoteEvent = ({
  sendVote,
  eventId,
  nbVotes,
  isConnected,
}) => {
  useEffect(() => {}, [isConnected]);

  const handleVote = () => {
    sendVote({
      event_id: eventId,
      user_id: 1,
    },
    eventId);
  };

  return (
    <div className="vote-event">
      {localStorage.getItem('userName') !== null
        ? (
          <>
            <p>Click pour voter</p>
            <TiThumbsUp onClick={handleVote} className="icon-up" />
          </>
        )
        : (<p>Veuillez vous connecter</p>)
        }
      <p>{nbVotes} Votes</p>
    </div>
  );
};

VoteEvent.propTypes = {
  sendVote: PropTypes.func.isRequired,
  eventId: PropTypes.number.isRequired,
  nbVotes: PropTypes.number.isRequired,
  isConnected: PropTypes.bool.isRequired,
};

export default VoteEvent;
