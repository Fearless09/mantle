import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Mainnet from './component/Mainnet';
import GasFee from './component/GasFee';
import { useState } from 'react';
import Copyright from './component/Copyright';
import MantleFooter from './component/MantleFooter';
import Background from './component/Background';

function App() {
  const [viewGas, setViewGas] = useState(true)

  return (
    <>
      <Background />
      <Navbar />
      <Mainnet />

      {viewGas && <GasFee onClose={() => setViewGas(false)} />}
      <Copyright />
      <MantleFooter />
    </>
  );
}

export default App;
