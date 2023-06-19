"use client";

import React, { useState } from "react";
import { useQuery } from "react-query";
import { GoSearch } from "react-icons/go";

import { getPokemons, getPokemonsByName } from "@/services/pokemons";
import PokemonCard from "@/components/PokemonCard";
import useDebounce from "@/hooks/useDebounce";

import styles from "./styles.module.scss";

export default function Home() {
  const [name, setName] = useState("");

  const debounceChange = useDebounce(setName, 1000);

  const { data } = useQuery(["pokemons"], getPokemons, {
    enabled: !name,
    retry: false,
    refetchOnWindowFocus: false,
  });

  const { data: pokemon } = useQuery(
    ["pokemons-name", name],
    () => getPokemonsByName(name),
    {
      enabled: !!name,
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  console.log(pokemon);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Pokédex</h1>
      <p className={styles.description}>
        Search for Pokémon by name or using the National Pokédex number.
      </p>
      <div className={styles.searchContainer}>
        <button>
          <GoSearch size={20} className={styles.searchIcon} />
        </button>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="What Pokémon are you looking for?"
          onChange={(e) => debounceChange(e.target.value)}
          className={styles.input}
        />
      </div>

      {!pokemon &&
        data &&
        data?.map((pokemons, index) => (
          <div key={index}>
            <PokemonCard pokemon={pokemons!} />
          </div>
        ))}

      {pokemon && <PokemonCard pokemon={pokemon!} />}
    </div>
  );
}
