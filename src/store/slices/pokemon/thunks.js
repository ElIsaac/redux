import { pokemonAPI } from "../../../api/pokemonAPI"
import { setPokemon, startLoadingPokemon } from "./pokemonSlice"

export const getPokemons=(page = 0)=>{
    return async (dispatch, getState)=>{
        dispatch(startLoadingPokemon() )
        //TODO: realizar peticion http

        const {data} = await pokemonAPI.get("pokemon?limit=10&offset="+page*10);
        console.log(data);
        dispatch(setPokemon({pokemons:data.results, page: page+1}))
    }
    

}