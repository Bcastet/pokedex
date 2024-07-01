import React, {useEffect, useState} from 'react'
import './App.css'
import {CssBaseline, Grid, Stack} from "@mui/material";
import PokemonSelect from "./selectors/PokemonSelect.tsx";
import ReferentialContext, {useReferentialContext} from "./Context.tsx";
import {PokemonDetail, PokemonSummary} from "./api";
import PokemonIcon from "./images/PokemonIcon.tsx";

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined as number | undefined,
        height: undefined as number | undefined,
    });
    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}
function App() {
  const size = useWindowSize();

  return (
  <ReferentialContext>
    <CssBaseline />
    <Page/>
  </ReferentialContext>
  )
}

function Page(){
  const api = useReferentialContext().pokeApi;
  const [pokemon, setPokemon] = useState<string|null>('ditto');
  const [pokemonDetail, setPokemonDetail] = useState<PokemonDetail|null>(null);

  useEffect(() => {
      if(pokemon){
          setPokemonDetail(null);
          api.pokemonRetrieve({id: pokemon}).then(r => setPokemonDetail(r));
      }
  }, [pokemon]);

  return <Stack direction={'column'} sx={{backgroundColor: 'white', width: '100%', height: '100%'}}>
      <PokemonSelect value={pokemon} onChange={setPokemon}/>
      <PokemonIcon pokemon={pokemonDetail}/>
    </Stack>
}

export default App
