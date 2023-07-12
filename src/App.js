import { Alchemy, Network } from "alchemy-sdk";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import SpecificPage from "./pages/AccountsPage/SpecificPage";
import XplorerPage from "./pages/BlockExplorerPage/XplorerPage";
import TransactionDetailsPage from "./pages/TransactionDetailsPage/TransactionDetailsPage";
import DnePage from "./pages/DnePage/DnePage"

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
	apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
	network: Network.ETH_MAINNET,
};

// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
export const alchemy = new Alchemy(settings);

function App() {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path="/accounts" element={<SpecificPage />} />
				<Route path="/block-explorer" element={<XplorerPage />} />
				<Route path="/transaction/:id" element={<TransactionDetailsPage />} />
				<Route path="/" element={<XplorerPage />} />
        <Route path = "*" element= {<DnePage />} />
			</Routes>
		</div>
	);
}

export default App;