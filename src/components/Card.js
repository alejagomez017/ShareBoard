import React from "react";
import styled from "styled-components";
import heart from "/public/images/heart1.png";
import share from "/public/images/share1.png";

const CardDiv = styled.div`
  display: inline-flexbox;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 1px 1px 8px;
  width: 300px;
  height: 400px;
  border-radius: 20px;
  margin-bottom: 80px;
  margin: 30px;
`;

const InfoDiv = styled.div`
  margin-top: 0px;
  width: 250px;
  text-align: left;
  margin-left: 30px;
  margin-right: 30px;
`;

const DescriptionDiv = styled.div`
  display: flex;
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 30px;
  height: 60px;
  margin-right: 15px;
`;

const Button = styled.button`
  border: solid lightgray;
  background-color: white;
  height: 40px;
  width: 100px;
  margin-top: 10px;
  border-radius: 10px;
`;

const Img = styled.img`
  width: 65px;
  border: none;
  border-radius: 10px;
`;

const CategoryDiv = styled.p`
  color: gray;
  margin-top: -70px;
`;

const ImgDiv = styled.img`
  display: block;
  width: 200px;
  height: 200px;
  margin-top: -40px;

  margin-right: auto;
  margin-left: auto;
`;

const Name = styled.h3`
  margin-top: -40px;
`;

function Card({ person }) {
  return (
    <CardDiv>
      <InfoDiv>
        <ImgDiv src={person.imgPath} alt={person.name} />
        <Name>{person.name}</Name>
        {person.service}
        <DescriptionDiv>
          <p>{person.description}</p>
        </DescriptionDiv>
        {person.date}

        <ButtonDiv>
          <Img src={heart} alt="hey" />
          <Button>Open</Button>
          <Img src={share} alt="hey" />
        </ButtonDiv>
      </InfoDiv>
    </CardDiv>
  );
}

export default Card;
