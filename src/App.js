import React from "react";
import logo from "./police/police.jpg";
// import logo from "./police/cat-meme.gif";
import "./App.css";

function App() {
	const inputRef = React.useRef(null);

	const handleAccessGranted = () => {
		// This function runs when "samantha" is found
		console.log("Access granted!");
		// Add your yippee logic here
	};

	const handleAccessDenied = () => {
		// This function shows the access denied screen
		console.log("Access denied!");
		// Add your access denied logic here
	};

	const handleSubmit = () => {
		const inputValue = inputRef.current.value;
		const samanthaRegex = /sumayyah/i; // Case-insensitive regex to check for "samantha"

		if (samanthaRegex.test(inputValue)) {
			handleAccessGranted();
		} else {
			handleAccessDenied();
		}
	};

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Access only for the pookie </p>
				<p>please type government first name below</p>
				<input
					ref={inputRef}
					type="text"
					placeholder="Enter government first name"
				/>
				<button onClick={handleSubmit}>Submit</button>
			</header>
		</div>
	);
}

export default App;
