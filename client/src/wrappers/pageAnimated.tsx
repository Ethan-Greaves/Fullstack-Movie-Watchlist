import React, { useContext } from "react";
import { motion } from "framer-motion";
import { pageAnimationContext } from "../contexts/pageAnimationContext";

interface i_pageAnimated {
	children: React.ReactNode;
}

/**
 * Will add animations to pages
 * @param children - The child elements inside this component
 * @returns
 */
export const PageAnimated = (props: i_pageAnimated) => {
	const { animation } = useContext(pageAnimationContext);
	return (
		<motion.div exit={"out"} initial={"out"} animate={"in"} variants={animation}>
			{props.children}
		</motion.div>
	);
};
