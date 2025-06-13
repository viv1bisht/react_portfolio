import React, { useState, useEffect } from "react";
import styled, { useTheme } from "styled-components";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

const NavLogo = styled.a`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-decoration: none;
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GitHubButton = styled.a`
  background: linear-gradient(45deg, ${({ theme }) => theme.primary}, #6a11cb);
  color: white;
  padding: 10px 20px;
  border-radius: 30px;
  font-weight: bold;
  text-decoration: none;
  transition: 0.3s ease-in-out;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }
`;

const Overlay = styled.div`
  display: ${({ open }) => (open ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const MobileMenu = styled.div`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  top: 80px;
  right: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.card_light};
  padding: 20px;
  z-index: 1000;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
`;

const MobileMenuLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  margin-bottom: 12px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo href="#">
            <DiCssdeck size="2rem" style={{ marginRight: "8px" }} />
            Portfolio
          </NavLogo>
          <MobileIcon onClick={() => setOpen(!open)}>
            <FaBars />
          </MobileIcon>
          <NavItems>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#education">Education</NavLink>
          </NavItems>
          <ButtonContainer>
            <GitHubButton href="https://github.com/viv1bisht" target="_blank">
              🌟 Github Profile
            </GitHubButton>
          </ButtonContainer>
        </NavContainer>
      </Nav>

      <Overlay open={open} onClick={() => setOpen(false)} />

      <MobileMenu open={open}>
        <MobileMenuLink href="#about" onClick={() => setOpen(false)}>About</MobileMenuLink>
        <MobileMenuLink href="#skills" onClick={() => setOpen(false)}>Skills</MobileMenuLink>
        <MobileMenuLink href="#experience" onClick={() => setOpen(false)}>Experience</MobileMenuLink>
        <MobileMenuLink href="#projects" onClick={() => setOpen(false)}>Projects</MobileMenuLink>
        <MobileMenuLink href="#education" onClick={() => setOpen(false)}>Education</MobileMenuLink>
        <GitHubButton href="https://github.com/" target="_blank">
          🌟 Github Profile
        </GitHubButton>
      </MobileMenu>
    </>
  );
};

export default NavBar;
