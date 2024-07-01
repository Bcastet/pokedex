import {Autocomplete, TextField} from "@mui/material";
import {useReferentialContext} from "../Context.tsx";


export default function PokemonSelect(props: {value: string | null, onChange: (selected: string | null) => void}) {
    const pokemonList = useReferentialContext().pokemonList;
    return <Autocomplete options={pokemonList} value={props.value} onChange={(e, nv) => props.onChange(nv)}
    renderInput={(params) => <TextField {...params} label={'Pokemon'} variant="outlined"
    sx={{width:'300px'}}/>}>
    </Autocomplete>
}