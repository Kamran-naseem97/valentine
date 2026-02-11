import React from "react";
import "../styles/ValentineQuestion.css";

function ValentineQuestion({ onAccept }) {
	const [state, setState] = React.useState("initial"); // initial, rejected_once, final_accept
	const [rejectionCount, setRejectionCount] = React.useState(0);

	const wrongBuzzerAudio = new Audio(require("../sounds/wrongbuzzer.mp3"));

	// Messages that cycle through each rejection
	const rejectionMessages = [
		"are you sure? It looks like you missed the yes button",
		"are you sure pookie?",
		"wrong please try again",
		"click the other one",
	];

	// Image sets for each state
	const flowersStartImages = [
		require("../flowers-start/0.gif"),
		require("../flowers-start/1.gif"),
	];

	const missedImages = [require("../missed/flanders.gif")];

	const rejectImages = [
		require("../reject/0.jpg"),
		require("../reject/1.gif"),
		require("../reject/2.gif"),
		require("../reject/3.gif"),
		require("../reject/4.gif"),
		require("../reject/5.gif"),
		require("../reject/6.gif"),
		require("../reject/7.gif"),
		require("../reject/8.gif"),
		require("../reject/9.gif"),
		require("../reject/10.gif"),
		require("../reject/11.gif"),
	];

	const getLogoImage = () => {
		if (state === "initial") {
			return flowersStartImages[
				Math.floor(Math.random() * flowersStartImages.length)
			];
		} else if (state === "rejected_once") {
			return missedImages[0];
		} else if (state === "rejecting") {
			return rejectImages[rejectionCount % rejectImages.length];
		}
		return flowersStartImages[0];
	};

	const handleReject = () => {
		wrongBuzzerAudio
			.play()
			.catch((err) => console.log("Audio play failed:", err));
		if (state === "initial") {
			setState("rejected_once");
			setRejectionCount(0);
		} else if (state === "rejected_once") {
			setState("rejecting");
			setRejectionCount(1);
		} else if (state === "rejecting") {
			setRejectionCount(rejectionCount + 1);
		}
	};

	const handleAccept = () => {
		setState("final_accept");
		onAccept();
	};

	const getRejectButtonText = () => {
		if (state === "initial") return "No";
		if (state === "rejected_once")
			return "are you sure? It looks like you missed the yes button";
		if (state === "rejecting") {
			return rejectionMessages[(rejectionCount - 1) % rejectionMessages.length];
		}
		return "No";
	};

	const getYesButtonScale = () => {
		if (state === "initial") return 1;
		if (state === "rejected_once") return 1.3;
		if (state === "rejecting") return 1 + rejectionCount * 0.3;
		return 1;
	};

	const getContentScale = () => {
		if (state === "initial") return 1;
		if (state === "rejected_once") return 1.3;
		if (state === "rejecting") return 1 + rejectionCount * 0.3;
		return 1;
	};

	const getImageTranslate = () => {
		if (state === "initial") return 0;
		if (state === "rejected_once") return -10;
		if (state === "rejecting") return -10 - rejectionCount * 8;
		return 0;
	};

	const getRejectButtonTranslate = () => {
		if (state === "initial") return 0;
		if (state === "rejected_once") return 10;
		if (state === "rejecting") return 10 + rejectionCount * 8;
		return 0;
	};

	const getNoButtonScale = () => {
		if (state === "initial") return 1;
		if (state === "rejected_once") return 0.95;
		if (state === "rejecting") return 0.95 - rejectionCount * 0.05;
		return 1;
	};

	const getContainerTranslate = () => {
		if (state === "initial") return 0;
		if (state === "rejected_once") return 20;
		if (state === "rejecting") return 20 + rejectionCount * 15;
		return 0;
	};

	return (
		<div
			className="valentine-question"
			style={{
				transform: `translateY(${getContainerTranslate()}px)`,
				transition: "transform 0.3s ease",
			}}
		>
			<img
				src={getLogoImage()}
				alt="valentine"
				className="valentine-logo"
				style={{
					transform: `scale(${getContentScale()}) translateY(${getImageTranslate()}px)`,
					transition: "transform 0.3s ease",
				}}
			/>
			<h1
				className="valentine-question-text"
				style={{
					transform: `translateY(${getImageTranslate()}px)`,
					transition: "transform 0.3s ease",
				}}
			>
				Will you be my Valentine?
			</h1>

			<div className="button-container">
				<button
					className="accept-btn"
					onClick={handleAccept}
					style={{ transform: `scale(${getYesButtonScale()})` }}
				>
					Yes
				</button>
				<button
					className="reject-btn"
					onClick={handleReject}
					style={{
						transform: `scale(${getNoButtonScale()}) translateY(${getRejectButtonTranslate()}px)`,
						transition: "transform 0.3s ease",
					}}
				>
					{getRejectButtonText()}
				</button>
			</div>
		</div>
	);
}

export default ValentineQuestion;
