import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon/thunks";

export const PokemonApp = () => {
  const dispatch = useDispatch();
  const { isLoading, pokemons, page } = useSelector((state) => state.pokemons); //pokemons viene del nombre qye se le asigno en el reducer

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>pokemon</h1>
      <hr />
      <p>
        is loading <span>{isLoading ? "si" : "no"}</span>
      </p>
      <ul>
        {pokemons.map((i) => (
          <li>{i.name}</li>
        ))}
      </ul>
      <button 
        onClick={()=>dispatch(getPokemons(page-1))}
        disabled={isLoading}
        >
          prev
        </button>

      <button
        onClick={() => dispatch(getPokemons(page + 1))}
        disabled={isLoading}
      >
        Next
      </button>
    </>
  );
};
