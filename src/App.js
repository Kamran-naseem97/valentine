import React from "react";
import "./App.css";
import NameVerification from "./components/NameVerification";
import ValentineQuestion from "./components/ValentineQuestion";
import AcceptanceAnimation from "./components/AcceptanceAnimation";

function App() {
	const [currentScreen, setCurrentScreen] = React.useState("verification"); // verification, valentine, acceptance

	const handleNameVerificationSuccess = () => {
		setCurrentScreen("valentine");
	};

	const handleAccept = () => {
		setCurrentScreen("acceptance");
	};

	return (
		<div className="App">
			{currentScreen === "verification" && (
				<NameVerification onSuccess={handleNameVerificationSuccess} />
			)}
			{currentScreen === "valentine" && (
				<ValentineQuestion onAccept={handleAccept} />
			)}
			{currentScreen === "acceptance" && <AcceptanceAnimation />}
		</div>
	);
}

export default App;
