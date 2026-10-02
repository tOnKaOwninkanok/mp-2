import styled from "styled-components";
import type {Recipe} from "../interfaces/Recipes.ts";

const AllRecipeDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: #fff5e9;
    font-family: "Comic Sans MS", cursive;
`;

const SingleRecipeDiv = styled.div<{difficulty: string}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;

    background-color: ${(props) =>
    props.difficulty === "Easy" ? '#f7b6c8' : '#fce4ec'};

    color: #5c3a3a;
    border-radius: 10px;

    font-family: "Comic Sans MS", cursive;
    font-size: calc(10px + 1vw);
    font-weight: bold;
    line-height: 1.2;

    text-align: center;

    h1 {
        font-family: "Comic Sans MS", cursive;
        font-size: calc(10px + 1.5vw);
        line-height: 1.2;
        margin: 10px 0;
    }
`;
export default function Recipe(props : { data:Recipe[] } ){
    return (
        <AllRecipeDiv >
            {
                props.data.map((food: Recipe) =>
                    <SingleRecipeDiv key={food.id} difficulty={food.difficulty}>
                        <h1>{food.name}</h1>
                        <p>{food.cuisine}</p>
                        <p>Difficulty: {food.difficulty}</p>
                        <img src={food.image} alt={`image of ${food.name}`} />
                    </SingleRecipeDiv>
                )
            }
        </AllRecipeDiv>
    );
}

