import React from 'react';
import PropTypes from 'prop-types';

const CharacterCard = ({ name, photoUrl, weapon, position, affiliation }) => (
  <figure data-testid="character-card">
    <h2>{name}</h2>
    <img src={photoUrl} />
    <h2>{weapon}</h2>
    <h2>{position}</h2>
    <h2>{affiliation}</h2>
  </figure>
)

CharacterCard.propTypes = {
  name: PropTypes.string,
  photoUrl: PropTypes.string,
  weapon: PropTypes.string,
  position: PropTypes.string,
  affiliation: PropTypes.string
}

export default CharacterCard;