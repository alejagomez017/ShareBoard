import React, { useState } from "react";
import styled from "styled-components";
import profilepic from "/public/images/profilepic.png";
import image1 from "/public/images/profile.png";
import image2 from "/public/images/messages.png";
import image3 from "/public/images/saved.png";
import image4 from "/public/images/settings.png";
import barss from "/public/images/barss.png";

const DivSideBar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 20px;
  height: 800px;
  width: 250px;
  text-align: left;
  margin-left: 0px;
  margin-right: 30px;
  box-shadow: rgba(0, 0, 0, 0.24) 1px 1px 8px;
  margin-top: 30px;
`;

const Img = styled.img`
  display: block;
  height: 150px;
  width: 150px;
  margin-left: auto;
  margin-right: auto;
`;

const Name = styled.h3`
  margin-top: -30px;
  text-align: center;
`;

const DivTop = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin-top: 15px;
  margin-left: 10px;
  margin-right: 10px;
  height: 70px;
  border-bottom: solid lightgray;
`;

const DivPages = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  margin-top: 25px;
`;

const PageImg = styled.img`
  height: 45px;
`;

const Img2 = styled.img`
  height: 50px;
  width: 50px;
`;

const Img3 = styled.img`
  height: 70px;
  width: 70px;
`;

const Button = styled.button`
  border-radius: 10px;
  width: 80px;
  height: 30px;
  background-color: none;
  border: none;
  background: none;
  cursor: pointer;
  margin-right: 100px;
  display: flex;
  float: right;
  margin-top: -50px;
`;

const Div2 = styled.h2`
  height: 50px;
  width: 300px;
  margin-left: 20px;
`;

const open = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Button type="button" onClick={() => setShow(!show)}>
        <Img3 src={barss} alt="profile" />
      </Button>

      {show && (
        <DivSideBar>
          <Div2>
            Hello there, <br />
            <span> Jasmine </span>{" "}
          </Div2>

          <Img src={profilepic} alt="profile" />
          <DivTop>
            <p>200 followers</p>
            <p>120 connections </p>
          </DivTop>

          <DivPages>
            <PageImg src={image1} alt="profile" />
            <p>Profile</p>
          </DivPages>

          <DivPages>
            <PageImg src={image2} alt="profile" />
            <p>Messages</p>
          </DivPages>

          <DivPages>
            <PageImg src={image3} alt="profile" />
            <p>Saved</p>
          </DivPages>

          <DivPages>
            <PageImg src={image4} alt="profile" />
            <p>Settings</p>
          </DivPages>
        </DivSideBar>
      )}
    </div>
  );
};

export default open;
