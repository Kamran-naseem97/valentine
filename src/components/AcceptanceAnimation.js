import React from "react";
import "../styles/AcceptanceAnimation.css";

function AcceptanceAnimation() {
	const acceptImages = [
		require("../accept/cabby-cabby-cat.gif"),
		require("../accept/cat-jump.gif"),
		require("../accept/cat-tongue-shake-cat-tongue.gif"),
		require("../accept/floreyonce-cat.gif"),
		require("../accept/flowers.gif"),
		require("../accept/happy-cat.gif"),
		require("../accept/love-i-love-you.gif"),
	];

	const yippeeAudio = new Audio(require("../sounds/yippee-tbh.mp3"));

	React.useEffect(() => {
		// Play yippee sound 3 times with delays
		yippeeAudio.play().catch((err) => console.log("Audio play failed:", err));
		setTimeout(() => {
			const yippeeAudio2 = new Audio(require("../sounds/yippee-tbh.mp3"));
			yippeeAudio2
				.play()
				.catch((err) => console.log("Audio play failed:", err));
		}, 600);
		setTimeout(() => {
			const yippeeAudio3 = new Audio(require("../sounds/yippee-tbh.mp3"));
			yippeeAudio3
				.play()
				.catch((err) => console.log("Audio play failed:", err));
		}, 1200);
	}, []);

	// Fixed positions for each image - scattered randomly
	const imagePositions = [
		{ top: "12%", left: "8%" },
		{ top: "8%", right: "12%" },
		{ top: "35%", left: "5%" },
		{ top: "50%", right: "8%" },
		{ top: "68%", left: "25%" },
		{ top: "8%", left: "50%" },
		{ top: "72%", right: "15%" },
	];

	return (
		<div className="acceptance-animation">
			<div className="images-container">
				{acceptImages.map((img, index) => (
					<img
						key={index}
						src={img}
						alt="celebration"
						className="celebration-image"
						style={{
							...imagePositions[index],
						}}
					/>
				))}
			</div>
			<h1 className="hooray-message">Hooray! 🎉</h1>
			<p className="final-message">
				I love you so much, I can't wait to show you, I'm so happy I have you 💖
				PS I'm going to follow up with some plans on insta lol
			</p>
		</div>
	);
}

export default AcceptanceAnimation;
