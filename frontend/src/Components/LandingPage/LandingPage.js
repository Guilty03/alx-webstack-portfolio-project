// src/Components/LandingPage/LandingPage.js
import React from 'react';
import styled from 'styled-components';
import bg from '../../img/bg.png'; // Import the background image directly

function LandingPage({ setActive }) {
  const handleGetStarted = () => {
    setActive(1); // Navigate to the main app
  };

  return (
    <LandingPageStyled>
      <div className="content">
        <h1>Welcome to Expense Tracker</h1>
        <button onClick={handleGetStarted}>Get Started</button>
      </div>
    </LandingPageStyled>
  );
}

const LandingPageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  .content {
    text-align: center;
    background: rgba(252, 246, 249, 0.8);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    h1 {
      margin-bottom: 20px;
      font-size: 2.5rem;
      color: #333;
    }
    button {
      padding: 10px 20px;
      font-size: 1.2rem;
      background: #ff7f50;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background 0.3s;
      &:hover {
        background: #ff6347;
      }
    }
  }
`;

export default LandingPage;