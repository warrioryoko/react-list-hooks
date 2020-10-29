import React, { useState, useEffect } from 'react';
import CharacterDetail from '../components/app/avatar-characters/CharacterDetail';
import { getCharacters, getDetails } from '../services/avatar-api';

const DetailCharacters = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState('');

  const characterName = match.params.characterName;

  useEffect(() => {
    getDetails(characterName)
      .then(fetchedCharacter => setCharacter(fetchedCharacter[0]))
      .finally(() => setLoading(false));
  }, [characterName]);

  if (loading) return <h1>Loading!</h1>;

  return (
    <CharacterDetail {...character} />
  );
};

export default DetailCharacters;