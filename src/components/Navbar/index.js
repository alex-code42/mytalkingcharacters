import React from "react";
import Link from "next/link";
import styled from 'styled-components';


// Define a styled component for the Navbar
const StyledNavbar = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
  font-size: 20px;
  color: white;
 
  background-color: red;
 

  .text-white{
    color: white;
    list-style-type: none;
    background-color: aliceblue;
    width: 20px;
    margin: 10px;
  }
`;

const Navbar = () => {
    return (
      <StyledNavbar>
        <div>
          <Link href="/">
            <p>Home</p>
          </Link>
        </div>
        <ul className="text-white">
          <li className="text-white">
            <Link href="/characters">
              <p>Characters</p>
            </Link>
          </li>
          <li className="text-white">
            <Link href="/about">
              <p>About us</p>
            </Link>
          </li>
          <li className="text-white">
            <Link href="/contacts">
              <p>Contacts</p>
            </Link>
          </li>
        </ul>
      </StyledNavbar>
    );
  };
  
  export default Navbar;
  
  
  
  
