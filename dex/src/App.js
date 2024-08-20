import "./App.css";
import Header from "./components/Header";
import Swap from "./components/Swap";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import { useConnect, useAccount } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";

function App() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new MetaMaskConnector(),
  });

  return (
    <div className="App">
      <Header connect={connect} isConnected={isConnected} address={address}>
        <div className="mainWindow">
          <About />
          <Routes>
            <Route
              path="/"
              element={<Swap isConnected={isConnected} address={address} />}
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Header>
    </div>
  );
}

export default App;
