import RecipeCom from "./components/Recipe.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import type {Recipe} from "./interfaces/Recipes.ts";

const ParentDiv = styled.div`
    width: 80vw;
    margin: auto;
    background-color: #fff5e9;
    font-family: "Comic Sans MS", cursive;
`;

export default function App(){

  // useState Hook to store Data.
  const [data, setData] = useState<Recipe[]>([]);

  // useEffect Hook for error handling and re-rendering.
  useEffect(() => {
    async function fetchData(): Promise<void> {
      const rawData = await fetch("https://dummyjson.com/recipes?limit=10");
      const {recipes} : {recipes: Recipe[]} = await rawData.json();
      setData(recipes);
    }
    fetchData()
        .then(() => console.log("Data fetched successfully"))
        .catch((e: Error) => console.log("There was the error: " + e));
  }, [data.length]);

  return(
      <ParentDiv>
        <RecipeCom data={data}/>
      </ParentDiv>
  )
}
