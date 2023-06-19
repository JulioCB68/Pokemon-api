"use client";

import React, { useState } from "react";
import { useQuery } from "react-query";

import { getAllPokemons, getPokemon } from "@/services/pokemons";
import PokemonCard from "@/components/PokemonCard";

import styles from "./styles.module.scss";

export default function Home() {
  const [name, setName] = useState("");

  const { data } = useQuery(["pokemons"], getAllPokemons, {
    retry: false,
    refetchOnWindowFocus: false,
  });

  return (
    <div>
      <h1>Pokédex</h1>
      <p>Search for Pokémon by name or using the National Pokédex number.</p>

      {data &&
        data?.results?.map((pokemons, index) => (
          <>
            <PokemonCard key={index} name={pokemons.name} url={pokemons.url} />
          </>
        ))}
    </div>
  );
}
