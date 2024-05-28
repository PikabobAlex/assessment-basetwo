"use client";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
gsap.registerPlugin(ScrollTrigger);

function Section1() {
	const router = useRouter();

	React.useEffect(() => {
		// spin when scroll

		gsap.set(".spin", { transformOrigin: "center", x: "50%" });
		gsap.to(".spin", {
			scrollTrigger: {
				trigger: "#section1",
				start: "top top",
				end: "bottom top",
				scrub: true,
			},
			rotation: 45,
			ease: "none",
		});

		return () => {
			// cleanup
			gsap.killTweensOf(".spin");
		};
	}, []);

	return (
		<section id="section1" className="relative h-[100vw] overflow-hidden px-4 mb-12">
			<img src="/assets/imgs/Asset 2.png" alt="" className="spin absolute top-0 right-0" style={{transform:"translateX(50%)"}} />
			<img src="/assets/imgs/Asset 1.png" alt="" className="absolute bottom-0 left-0 w-[65%] translate-x-[20%] -translate-y-[5%]" />
			<img src="/assets/imgs/Asset 4.png" alt="" className="absolute bottom-0 left-0 w-[84px] translate-x-[20%] -translate-y-[5%]" onClick={() => router.push("/product")} />
		</section>
	);
}

function Section2() {
	const [spin, setSpin] = React.useState(0);
	const router = useRouter();

	return (
		<section
			onClick={() => {
				setSpin((prev) => (prev + 1) % 4);
			}}
			className="relative flex flex-col justify-center px-2 gap-2 mb-12 ml-4 h-[75vw]">
			<AnimatePresence>{new Array(4).fill(0).map((_, i) => spin === i && <motion.img key={i} transition={{ duration: 0.75, ease: "anticipate" }} initial={{ x: "-50%", opacity: 0 }} animate={{ x: "0%", opacity: 1 }} exit={{ x: "50%", opacity: 0 }} src={`/assets/imgs/section2spin${i + 1}.png`} className="absolute top-0 left-0 w-[70vw]" />)}</AnimatePresence>
			<div className="relative self-end flex flex-col leading-none w-[40vw]">
				<span className="block text-[36px] font-[800] leading-[0.75] w-fit">Enrich every moment</span>
				<span className="block text-[18px]">
					of your life <br /> with our lovingly <br /> crafted hijabs
				</span>
				<img src="/assets/imgs/Asset 4.png" alt="" className="absolute bottom-0 left-0 w-[84px] translate-x-[-100%] translate-y-[75%]" onClick={() => router.push("/product")}/>
			</div>
		</section>
	);
}

function Section3() {
	const [spin, setSpin] = React.useState(0);
	const router = useRouter();

	return (
		<section
			onClick={() => {
				setSpin((prev) => (prev + 1) % 4);
			}}
			className="relative flex flex-col justify-center px-2 gap-2 mb-12 ml-4 h-[75vw]">
			<AnimatePresence>
				{new Array(4).fill(0).map(
					(_, i) =>
						spin === i && (
							<motion.div key={i} transition={{ duration: 1, ease: "anticipate" }} initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} className="absolute top-1/2 right-0 size-full origin-top-right">
								<img src={`/assets/imgs/section3spin${i + 1}.png`} alt="" className="absolute right-0 top-[-50%] w-[70vw] h-auto" />
							</motion.div>
						)
				)}
			</AnimatePresence>
			<div className="relative flex flex-col leading-none w-[40vw]">
				<span className="block text-[36px] font-[800] leading-[0.75] w-fit">Enrich every moment</span>
				<span className="block text-[32px]">of your</span>
				<span className="block text-[36px] font-[800] leading-[0.75] w-fit">
					Everyday <br />
					Need
				</span>
				<img src="/assets/imgs/Asset 4.png" alt="" className="absolute bottom-0 right-0 w-[84px] translate-x-[60%] translate-y-[90%]" onClick={() => router.push("/product")}/>
			</div>
		</section>
	);
}

function Section4() {
	React.useEffect(() => {
		const caro1 = document.getElementById("caro1") as HTMLImageElement;
		const caro2 = document.getElementById("caro2") as HTMLImageElement;
		const caro3 = document.getElementById("caro3") as HTMLImageElement;

		gsap.to("#caro1", {
			scrollTrigger: {
				trigger: "#caro1",
				start: "top bottom",
				end: "center center",
				scrub: true,
			},
			x: -100,
			ease: "none",
		});

		gsap.fromTo(
			"#caro2",
			{ x: -100 },
			{
				scrollTrigger: {
					trigger: "#caro2",
					start: "top bottom",
					end: "center center",
					scrub: true,
				},
				x: -0,
				ease: "none",
			}
		);

		gsap.to("#caro3", {
			scrollTrigger: {
				trigger: "#caro3",
				start: "top bottom",
				end: "center center",
				scrub: true,
			},
			x: -100,
			ease: "none",
		});

		return () => {
			// cleanup
			gsap.killTweensOf(caro1);
			gsap.killTweensOf(caro2);
			gsap.killTweensOf(caro3);
		};
	}, []);

	return (
		<section id="section4" className="relative grid grid-rows-[1fr_0.6fr_1fr] gap-4 h-[80vw]">
			<div className="px-4">
				<img id="caro1" src="/assets/imgs/caro_1.png" alt="" className="max-w-none h-full w-auto" />
			</div>
			<div className="px-4">
				<img id="caro2" src="/assets/imgs/caro_2.png" alt="" className="max-w-none h-full w-auto" />
			</div>
			<div className="px-4">
				<img id="caro3" src="/assets/imgs/caro_3.png" alt="" className="max-w-none h-full w-auto" />
			</div>
		</section>
	);
}

function Section5() {
	const router = useRouter();
	React.useEffect(() => {
		gsap.fromTo(
			"section#section5 #ele1",
			{ x: "-250%", y: "-75%" },
			{
				scrollTrigger: {
					trigger: "#section5",
					start: "top bottom",
					end: "center center",
					scrub: true,
					toggleActions: "play none none reset",
				},
				x: "-120%",
				ease: "none",
			}
		);

		gsap.fromTo(
			"section#section5 #ele3",
			{ x: "250%", y: "-80%" },
			{
				scrollTrigger: {
					trigger: "#section5",
					start: "top bottom",
					end: "center center",
					scrub: true,
					toggleActions: "play none none reset",
				},
				x: "20%",
				ease: "none",
			}
		);
		gsap.fromTo(
			"section#section5 #ele4",
			{ x: "250%", y: "20%" },
			{
				scrollTrigger: {
					trigger: "#section5",
					start: "top bottom",
					end: "center center",
					scrub: true,
					toggleActions: "play none none reset",
				},
				x: "90%",
				ease: "none",
			}
		);
		return () => {
			// cleanup
			gsap.killTweensOf("section#section5 #ele1");
			gsap.killTweensOf("section#section5 #ele3");
		};
	}, []);
	return (
		<section id="section5" className="relative h-[70vw] bg-[url(/assets/imgs/section5bg.png)] bg-cover overflow-hidden">
			<img className="absolute bottom-0 left-0 w-[80vmin]" src="/assets/imgs/section5orna.png"></img>
			<img id="ele1" className="absolute left-1/2 top-1/2 w-[40vmin]" src="/assets/imgs/section5left.png" alt="" />
			<img id="ele2" className="absolute left-1/2 top-1/2 w-[40vmin] translate-x-[-50%] translate-y-[-20%]" src="/assets/imgs/section5center.png" alt="" />
			<img id="ele3" className="absolute left-1/2 top-1/2 w-[40vmin]" src="/assets/imgs/section5right1.png" alt="" />
			<img id="ele4" className="absolute left-1/2 top-1/2 w-[20vmin]" src="/assets/imgs/Asset 4.png" alt="" onClick={() => router.push("/product")} />
		</section>
	);
}

function Section6() {
	React.useEffect(() => {
		gsap.fromTo(
			"section#section6 #ele1",
			{ x: "-50%" },
			{
				scrollTrigger: {
					trigger: "#section6",
					start: () => "top bottom",
					end: () => "center center",
					scrub: true,
					toggleActions: "play none none reset",
				},
				x: "0%",
				ease: "none",
			}
		);

		gsap.fromTo(
			"section#section6 #ele2",
			{ y: "-20%" },
			{
				scrollTrigger: {
					trigger: "#section6",
					start: () => "top bottom",
					end: () => "center center",
					scrub: true,
					toggleActions: "play none none reset",
				},
				y: "0%",
				ease: "none",
			}
		);

		gsap.fromTo(
			"section#section6 #ele3",
			{ y: "20%" },
			{
				scrollTrigger: {
					trigger: "#section6",
					start: () => "top bottom",
					end: () => "center center",
					scrub: true,
					toggleActions: "play none none reset",
				},
				y: "0%",
				ease: "none",
			}
		);

		gsap.fromTo(
			"section#section6 #ele4",
			{ x: "50%" },
			{
				scrollTrigger: {
					trigger: "#section6",
					start: () => "top bottom",
					end: () => "center center",
					scrub: true,
					toggleActions: "play none none reset",
				},
				x: "0%",
				ease: "none",
			}
		);

		return () => {
			// cleanup
			gsap.killTweensOf("section#section6 #ele1");
			gsap.killTweensOf("section#section6 #ele2");
			gsap.killTweensOf("section#section6 #ele3");
			gsap.killTweensOf("section#section6 #ele4");
		};
	}, []);
	return (
		<section id="section6" className="h-[75vw] bg-[#ffcf00] w-full overflow-hidden relative">
			<img className="absolute top-0 left-0 w-[80vmin]" src="/assets/imgs/section6orna.png"></img>
			<img id="ele1" className="absolute origin-center w-full" src="/assets/imgs/section6left.webp" alt="" />
			<img id="ele2" className="absolute origin-center w-full" src="/assets/imgs/section6top.webp" alt="" />
			<img id="ele3" className="absolute origin-center w-full" src="/assets/imgs/section6bottom.webp" alt="" />
			<img id="ele4" className="absolute origin-center w-full" src="/assets/imgs/section6right.webp" alt="" />
			<div className="absolute top-[5vmin] left-[5vmin] size-full">
				<div className="relative flex flex-col leading-none w-[60vw] text-white">
					<span className="block text-[32px]">Varisha,for</span>
					<span className="block text-[36px] font-[800] leading-[0.9] w-fit">
						everyone, <br />
						everyday...
					</span>
				</div>
			</div>
		</section>
	);
}

export default function Home() {
	return (
		<>
			<main>
				<Section1 />
				<section className="flex px-2 gap-2 mb-12">
					<div className="w-full flex flex-col grow text-right">
						<span className="block text-[32px] tracking-tighter leading-[0.8] text-nowrap">Welcome to</span>
						<span className="block text-[47px] tracking-tighter leading-none font-[800]">Varisha</span>
					</div>
					<div className="w-full leading-[1.15] text-[10px]">
						<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper</p>
					</div>
				</section>
				<Section2 />
				<Section3 />
				<Section4 />
				<Section5 />
				<Section6 />
			</main>
		</>
	);
}
