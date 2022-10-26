import React, { useState } from "react";
import Scroll from "./Scroll";
import SearchList from "./SearchList";
import styled from "styled-components";
import ShowButton from "./ShowButton";

const Bar = styled.input`
  display: block;
  margin-left: 40%;
  margin-right: 50%;
  height: 60px;
  width: 400px;
  background-color: white;
  border: none;
  margin-bottom: 50px;
  margin-top: 0px;
  text-align: left;
  padding-left: 20px;
  outline: none;
  border-radius: 20px;
  position: absolute;
`;

const Section = styled.div`
  display: block;
  text-align: center;
`;

const Div2 = styled.div`
  padding: 3px;
  height: 400px;
  margin-top: 50px;
  width: 100vw;
  margin-left: 0%;
  margin-right: 42%;
  margin-bottom: 100px;
  background-image: url("https://images.unsplash.com/photo-1606509036992-4399d5c5afe4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: left;
`;

const Div3 = styled.div`
  display: flex;
`;

const Div4 = styled.div`
  display: flex;
  float: right;
`;

const DropDown = styled.div`
  display: flex;
  flex-direction: row;
  height: 20px;
  margin-left: 45%;
  color: white;
  margin-top: 200px;
`;

const Select = styled.select`
  border: none;
  outline: none;
  height: 35px;
  font-size: 15px;
  text-align: center;
  margin-top: 10px;
  color: black;
  border-radius: 10px;
  padding-right: 10px;
  padding-left: 10px;
`;

const LandingTitle = styled.p`
  margin-left: 10px;
  margin-top: 100px;

  color: white;
  font-family: "Poppins", sans-serif;
  font-size: 50px;
`;

function Search({ details }) {
  const [searchField, setSearchField] = useState("");

  const filteredPersons = details.filter((person) => {
    return (
      person.service.toLowerCase().includes(searchField.toLowerCase()) ||
      person.service.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
      <Scroll>
        <SearchList filteredPersons={filteredPersons} />
      </Scroll>
    );
  }

  return (
    <Section>
      <Div2>
        <LandingTitle>
          Exchange smiles, ideas, services, <br /> and more.
        </LandingTitle>

        <Bar
          type="search"
          placeholder="Search for anything"
          onChange={handleChange}
        />

        <DropDown>
          <Select name="Search by category" onChange={handleChange}>
            <option value="">Search By Category</option>
            <option value="Pet">Pets</option>
            <option value="Auto">Auto</option>
            <option value="Food">Food</option>
            <option value="Education">Education</option>
          </Select>
        </DropDown>
      </Div2>

      <Div4>
        <ShowButton />
      </Div4>

      <Div3>{searchList()}</Div3>
    </Section>
  );
}

export default Search;
