import React from 'react';
import PropTypes from 'prop-types';
import CharacterDetail from './CharacterDetail';

const Characters = ({ characters }) => {
  const characterDetails = characters.map(character => (
    <li key={character.name}>
      <a key={character.name} href={`/${character.name}`}>
        <CharacterDetail {...character} />
      </a>
    </li>
  ));

  return (
    <ul data-testid='list'>
      {characterDetails}
    </ul>
  );
};

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes,
    photoUrl: PropTypes.string,
    weapon: PropTypes.string,
    position: PropTypes.string,
    affiliation: PropTypes.string,
    allies: PropTypes.string,
    enemies: PropTypes.string,
    first: PropTypes.string
  }))
};

export default Characters;