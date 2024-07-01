import { useState } from 'react'
import './App.css'
import {Stack} from "@mui/material";
import PokemonSelect from "./selectors/Pokemon.tsx";
import ReferentialContext from "./Context.tsx";

function App() {
  const [pokemon, setPokemon] = useState<string|null>(null);

  return (
  <ReferentialContext>
    <Stack direction={'column'}>
      <PokemonSelect value={pokemon} onChange={setPokemon}/>
    </Stack>
  </ReferentialContext>
  )
}

export default App
