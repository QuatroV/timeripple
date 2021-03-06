import {
  Input,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { Panel, Button, HeaderTitle } from "../../components";
import {
  commitRegisterCredentials,
  commitSignInCredentials,
} from "../../store/domains/auth";

type AccordionPanel = "signIn" | "register";

const AuthApp = (): JSX.Element => {
  const [accordionPanel, setAccordionPanel] =
    useState<AccordionPanel>("signIn");

  const handleChange = (value: AccordionPanel) => (e: React.SyntheticEvent) =>
    setAccordionPanel(value);

  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmitRegister = () => {
    dispatch(
      commitRegisterCredentials({
        nickname,
        password,
      })
    );
  };

  const handleSubmitSignIn = () => {
    dispatch(
      commitSignInCredentials({
        nickname,
        password,
      })
    );
  };

  return (
    <>
      <HeaderTitle>Auth</HeaderTitle>
      <Accordion
        expanded={accordionPanel === "signIn"}
        onChange={handleChange("signIn")}
      >
        <AccordionSummary>
          <AccordionTitle active={accordionPanel === "signIn"}>
            Sign In
          </AccordionTitle>
        </AccordionSummary>
        <AccordionDetails>
          <CredentialsPanel>
            <Input
              placeholder="Nickname"
              type="text"
              value={nickname}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNickname(e.target.value)
              }
            />
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
            <Button onClick={handleSubmitSignIn}> Submit credentials </Button>
          </CredentialsPanel>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={accordionPanel === "register"}
        onChange={handleChange("register")}
      >
        <AccordionSummary>
          <AccordionTitle active={accordionPanel === "register"}>
            Register
          </AccordionTitle>
        </AccordionSummary>
        <AccordionDetails>
          <CredentialsPanel>
            <Input
              placeholder="Nickname"
              type="text"
              value={nickname}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNickname(e.target.value)
              }
            />
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
            <Button onClick={handleSubmitRegister}> Submit credentials </Button>
          </CredentialsPanel>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

const AccordionTitle = styled.span<{ active?: boolean }>`
  font-size: 32px;
  font-weight: 400;
  color: ${({ active }) => (active ? "black" : "gray")};
`;

const CredentialsPanel = styled(Panel)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default AuthApp;
