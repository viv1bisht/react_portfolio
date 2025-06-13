import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { projects } from "../../data/constants";
import ProjectContainer from "../Cards/ProjectContainer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  z-index: 1;
  align-items: center;
  padding: 40px 0px 80px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 30px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ToggleGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  ${({ active, theme }) =>
    active &&
    `
    background-color: ${theme.primary + 20};
  `}
  &:hover {
    background-color: ${({ theme }) => theme.primary + 8};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
`;

export const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;

const Project = () => {
  const [toggle, setToggle] = useState("all");

  return (
    <div id="projects"> {/* ✅ this line is the key fix */}
      <Container>
        <Wrapper>
          <Title>Projects</Title>
          <Desc>
            Here are some of my skills on which I have been working on for the
            past 1 years.
          </Desc>
          <ToggleGroup>
            <ToggleButton active={toggle === "all"} onClick={() => setToggle("all")}>
              ALL
            </ToggleButton>
            <Divider />
            <ToggleButton active={toggle === "web app"} onClick={() => setToggle("web app")}>
              WEB APP'S
            </ToggleButton>
            <Divider />
            <ToggleButton active={toggle === "CRM"} onClick={() => setToggle("CRM")}>
              CRM 
            </ToggleButton>
          {/*  <Divider />
            
<ToggleButton active={toggle === "machine learning"} onClick={() => setToggle("machine learning")}>
  MACHINE LEARNING
</ToggleButton>
*/}

          </ToggleGroup>

          <CardContainer>
            {(toggle === "all"
              ? projects
              : projects.filter((item) => item.category === toggle)
            ).map((project, index) => (
              <ProjectContainer key={index} project={project} />
            ))}
          </CardContainer>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Project;
