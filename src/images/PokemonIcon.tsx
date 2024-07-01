import {Box, CircularProgress, SxProps} from "@mui/material";
import {PokemonDetail} from "../api";


export default function PokemonIcon(props: {pokemon: PokemonDetail | null, sx?: SxProps}){
    const sx = props.sx ? props.sx : {width:'250px', height:'250px', alignItems:'center', justifyContent:'center', display:'flex'};

    return props.pokemon ? <Box component={'img'} src={props.pokemon?.sprites.frontDefault} sx={sx} /> : <Box sx={sx}><CircularProgress/></Box>
}

