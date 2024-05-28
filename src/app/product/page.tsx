"use client";
import axios from "axios";
import * as React from "react";
import _ from "lodash";
import { gsap } from "gsap";
import { useInView } from "framer-motion";

function Container({ children }: Readonly<{ children: React.ReactNode }>) {
	const ref = React.useRef(null);
	const isInView = useInView(ref, { once: true });
	return (
		<div
			ref={ref}
			className="mb-12 h-screen flex flex-col justify-center items-center bg-[#f0f0f0] text-[#333] p-8 w-full rounded-xl shadow-lg"
			style={{
				transform: isInView ? "none" : "translateX(-200px)",
				opacity: isInView ? 1 : 0,
				transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
			}}>
			{children}
		</div>
	);
}

export default function Page() {
	const [products, setProducts] = React.useState<Array<Record<string, any>>>([]);
	const baseUrl = "https://varisha.base2.my/";
	React.useEffect(() => {
		axios.get("https://varisha.base2.my/api/v1/products?sort=1&order=asc&per_page=10").then((response) => {
			console.log(response.data.data);
			setProducts(response.data.data);
		});
	}, []);

	return products.length > 0 ? (
		<main className="pt-24 px-8">
			{products.map((product) => {
					return (
						<React.Fragment key={product.id}>
							<Container>
								<h2 className="text-[24px]">{product.title}</h2>

								<p>Description:</p>
								<p className="text-[8px]">{(product.short_description as string).replace("<p>", "").replace("</p>", "")}</p>
								<p className="text-[8px]">{(product.description as string).replace("<p>", "").replace("</p>", "")}</p>
								<p>Price: {product.product_prices_display_price}</p>

								{(product.product_images as Array<Record<string, any>>).map((image, index) => {
									return <img key={image.product_id + index} src={baseUrl + image.file} alt={image.title} />;
								})}
							</Container>
						</React.Fragment>
					);
				})}
		</main>
	) : (
		<div className="h-screen flex justify-center items-center">
			<p>Loading...</p>
		</div>
	);
}
