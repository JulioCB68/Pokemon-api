"use client";
import React from "react";
import Image from "next/image";
import { useQuery } from "react-query";

import { getPokemon } from "@/services/pokemons";

import styles from "./styles.module.scss";
import "@/styles/global.scss";

interface IPokemonProps {
  name: string;
  url: string;
}

export default function PokemonCard({ name, url }: IPokemonProps) {
  const { data } = useQuery(["pokemons-id"], getPokemon);

  const typeClassName = data ? data.types[0].type.name : "";

  return (
    <div className={`${typeClassName} ${styles.container}`}>
      <div className={styles.leftSide}>
        <p className={styles.pokemonId}>#{data?.id}</p>
        <p className={styles.pokemonName}>{data?.name}</p>
        <Image
          className={styles.imageCardLeftSide}
          src="Pattern.svg"
          alt="Patterns"
          width={150}
          height={150}
        />
        <div>
          <div className={styles.pokemonContentType}>
            {data?.types.map((type, index) => (
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
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data?.id}.png`}
          alt="Pokemon Image"
          width={150}
          height={150}
          className={styles.pokemonImage}
        />
      </div>
    </div>
  );
}
