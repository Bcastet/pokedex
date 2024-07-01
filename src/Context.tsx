import {PokemonApi} from "./api";
import {createContext, ReactNode, useContext, useEffect, useState} from "react";

interface AppContextProps {
    pokeApi: PokemonApi;
    pokemonList: string[];
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export default function ReferentialContext(props: { children: ReactNode }) {
    const [pokeApi, setApi] = useState(new PokemonApi());
    const [pokemonList, setPokemons] = useState([] as string[]);
    useEffect(() => {
        pokeApi.pokemonList({limit:1000}).then(r => setPokemons(r.results?.map(o => o.name)))
    }, []);

    return (
        <AppContext.Provider
            value={{
                pokeApi,
                pokemonList
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
}

export const useReferentialContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};
