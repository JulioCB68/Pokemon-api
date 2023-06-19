"use client";

import React from "react";
import Image from "next/image";

import { PokemonId } from "@/types/pokemons";

import styles from "./styles.module.scss";
import "@/styles/global.scss";

interface IPokemonProps {
  pokemon: PokemonId;
}

export default function PokemonCard({ pokemon }: IPokemonProps) {
  const type = pokemon ? pokemon.types[0].type.name : "";

  return (
    <div className={`${type} ${styles.container}`}>
      <div className={styles.leftSide}>
        <p className={styles.pokemonId}>#{pokemon?.id}</p>
        <p className={styles.pokemonName}>{pokemon?.name}</p>
        <Image
          className={styles.imageCardLeftSide}
          src="Pattern.svg"
          alt="Patterns"
          width={150}
          height={150}
        />
        <div>
          <div className={styles.pokemonContentType}>
            {pokemon?.types.map((type, index) => (
              <div
                key={index}
                className={`${type.type.name}-type ${styles.pokemonType}`}
              >
                <p className={styles.pokemonTypeText}>{type.type.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.rightSide}>
        <Image
          className={styles.pokeballCardImage}
          src="Pokeball.svg"
          alt="Patterns"
          width={150}
          height={150}
        />
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon?.id}.png`}
          alt="Pokemon Image"
          width={150}
          height={150}
          className={styles.pokemonImage}
        />
      </div>
    </div>
  );
}
