import React, { useState, useEffect } from 'react';
import CharacterList from '../components/app/avatar-characters/CharacterList';
import { getCharacters } from '../services/avatar-api';

const ListCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then(characters => setCharacters(characters))
      .finally(() => setLoading(false));
  }, []);
  if (loading) return <h1>Loading!</h1>;

  return (
    <CharacterList characters={characters} />
  );
};

export default ListCharacters;