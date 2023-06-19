"use client";

import React, { useState } from "react";
import { useQuery } from "react-query";
import { GoSearch } from "react-icons/go";

import { getPokemons } from "@/services/pokemons";
import PokemonCard from "@/components/PokemonCard";

import styles from "./styles.module.scss";

export default function Home() {
  const [name, setName] = useState("");

  const { data } = useQuery(["pokemons-id"], getPokemons, {
    retry: false,
    refetchOnWindowFocus: false,
  });

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
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />
      </div>

      {data &&
        data?.map((pokemons, index) => (
          <div key={index}>
            <PokemonCard pokemon={pokemons!} />
          </div>
        ))}
    </div>
  );
}
