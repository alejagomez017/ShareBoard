import React from "react";
import Search from "./components/Search";
import initialDetails from "./data/initialDetails";
import styled from "styled-components";

const Div = styled.div``;

function App() {
  return (
    <Div>
      <Search details={initialDetails} />
    </Div>
  );
}

export default App;
