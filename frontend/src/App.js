// src/App.js
import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import bg from './img/bg.png';
import { MainLayout } from './styles/Layouts';
import Orb from './Components/Orb/Orb';
import Navigation from './Components/Navigation/Navigation';
import Dashboard from './Components/Dashboard/Dashboard';
import Income from './Components/Income/Income';
import Expenses from './Components/Expenses/Expenses';
import { useGlobalContext } from './context/globalContext';
import LandingPage from './Components/LandingPage/LandingPage';

function App() {
  const [active, setActive] = useState(0); // Default to 0 for the landing page

  const global = useGlobalContext();
  console.log(global);

  const displayData = () => {
    switch (active) {
      case 0:
        return <LandingPage setActive={setActive} />;
      case 1:
        return <Dashboard />;
      case 2:
        return <Dashboard />;
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  };

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  return (
    <div className="App">
      {active === 0 ? (
        displayData() // Display the landing page if active is 0
      ) : (
        <AppStyled bg={bg}>
          {orbMemo}
          <MainLayout>
            <Navigation active={active} setActive={setActive} />
            <main>
              {displayData()}
            </main>
          </MainLayout>
        </AppStyled>
      )}
    </div>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;