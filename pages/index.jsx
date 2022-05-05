import Head from "next/head";
import { useState } from "react";
import Character from "components/Character";
import classes from "styles/Home.module.css";

export default function Characters({ characters }) {
  const [value, setValue] = useState(12);

  const handleShowMore = () => {
    setValue(value + 12);
  };

  return (
    <div className={classes.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col h-screen justify-center">
        <div className="w-full flex mt-200 p-30 justify-center gap-25 flex-wrap">
          {characters
            .filter((character) => character.id !== 28 && character.id !== 77)
            .map(
              (character, index) =>
                index < value && (
                  <Character
                    character={character}
                    key={character.id}
                  ></Character>
                )
            )}
        </div>
        {value < characters.length && (
          <button
            className="mt-4 box-border ease-linear duration-100 font-bold px-5 py-2 rounded-sm border-2 border-black mx-auto block hover:bg-black hover:text-white"
            onClick={handleShowMore}
          >
            SHOW MORE
          </button>
        )}
      </div>
    </div>
  );
}
export async function getStaticProps(context) {
  const characters = await fetch(
    "https://akabab.github.io/starwars-api/api/all.json"
  ).then((res) => res.json());
  return {
    props: {
      characters,
    },
  };
}
