"use client";

import React, { useEffect } from "react";
// import Lottie, { Options as LottieOptions } from "react-lottie";
import Lottie, { LottieComponentProps, LottieRef, LottieRefCurrentProps } from "lottie-react";
import animationData from "@/libs/lottie.json";

export default function LottieAnimation() {
	// const defaultOptions: LottieOptions = {
	// 	loop: true,
	// 	autoplay: true,
	// 	animationData: animationData,
	// 	rendererSettings: {
	// 		preserveAspectRatio: "xMidYMid slice",

	// 	},
	// };

	const ref = React.useRef<LottieRefCurrentProps>(null);

	// console.log(ref.current);
	useEffect(() => {
		if (ref.current) {
			const dur = ref.current.getDuration();
			const lottie = ref.current;
			lottie.stop();
			window.addEventListener("scroll", () => {
				const scroll = window.scrollY;
				const total = document.documentElement.scrollHeight - window.innerHeight;
				const progress = (scroll / total) * 0.9;
				lottie.goToAndStop(progress * (dur! * 1000) % (dur! * 1000));
			});
		}

		return () => {
			window.removeEventListener("scroll", () => {});
		};

	}, []);

	return (
		<div className="absolute top-[25vw] left-0 size-[30vw]">
			<Lottie lottieRef={ref} animationData={animationData} />
		</div>
	);
}
