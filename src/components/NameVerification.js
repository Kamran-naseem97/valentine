import React from "react";
import policeImg from "../police/police.jpg";
import "../styles/NameVerification.css";

function NameVerification({ onSuccess }) {
	const [inputValue, setInputValue] = React.useState("");
	const [error, setError] = React.useState("");

	const susAudioRef = React.useRef(null);
	const okurAudioRef = React.useRef(null);
	const wrongBuzzerAudioRef = React.useRef(null);

	React.useEffect(() => {
		// Initialize audio objects
		susAudioRef.current = new Audio(require("../sounds/sus.mp3"));
		okurAudioRef.current = new Audio(require("../sounds/okur.mp3"));
		wrongBuzzerAudioRef.current = new Audio(require("../sounds/wrongbuzzer.mp3"));

		// Play sus sound with 2 second delay
		const timer = setTimeout(() => {
			if (susAudioRef.current) {
				susAudioRef.current.play().catch((err) => console.log("Audio play failed:", err));
			}
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		const sumayyahRegex = /sumayyah/i;

		if (sumayyahRegex.test(inputValue)) {
			if (okurAudioRef.current) {
				okurAudioRef.current.play().catch((err) => console.log("Audio play failed:", err));
			}
			onSuccess();
			setInputValue("");
			setError("");
		} else {
			if (wrongBuzzerAudioRef.current) {
				wrongBuzzerAudioRef.current.play().catch((err) => console.log("Audio play failed:", err));
			}
			setError("Try again with pookies name");
			setInputValue("");
		}
	};

	return (
		<div className="name-verification">
			<div className="verification-content">
				<img src={policeImg} className="verification-logo" alt="police logo" />
				<p className="verification-title">Access only for the pookie</p>
				<p className="verification-subtitle">
					Please type government first name below
				</p>

				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Enter government first name"
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						className="verification-input"
					/>
					<button type="submit" className="verification-button">
						Submit
					</button>
				</form>

				{error && <p className="verification-error">{error}</p>}
			</div>
		</div>
	);
}

export default NameVerification;
