import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";

const AppContainer = styled.div`
  /* height: 100vh;
  width: 100%; */
  margin: 0;
  padding: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const People = [
  "Łukasz Stępień",
  "Rafał Roźko",
  "Magda Mikołajku",
  "Arur Ciszyński",
  "Tomeke Całek",
  "Krzysztóf Białek",
];

const polishRemover = (pS: string) => {
  return pS
    .replace(/ę/gi, "e")
    .replace(/ż/gi, "z")
    .replace(/ó/gi, "o")
    .replace(/ł/gi, "l")
    .replace(/ć/gi, "c")
    .replace(/ś/gi, "s")
    .replace(/ź/gi, "z")
    .replace(/ń/gi, "n")
    .replace(/ą/gi, "a")
    .replace(/ /g,'')
};




const App: React.FC = () => {
  const [polishName, setpolishName] = useState(People);

  const polishSearch = (polishName:[], find: string) => {
    setpolishName(polishName.filter(find)) 
  }
  return (
    <AppContainer>
      <h2>JS-Playground</h2>
      {People.map((b, key) => (
        <a href={polishRemover(b)}>{key + 1}{b}</a>
      ))}
    </AppContainer>

    // alert(str.trim())
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
