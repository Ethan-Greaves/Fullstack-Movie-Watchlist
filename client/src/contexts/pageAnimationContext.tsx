import React, { createContext, useState } from "react";
import { FC } from "react";
import fadeTransition from "../pages/animations/fadeTransition";

interface IPageAnimationContext {
	animation: {};
	changeAnimation?: (newAnim: {}) => void;
}

const defaultState = {
	animation: fadeTransition,
};

export const pageAnimationContext = createContext<IPageAnimationContext>(defaultState);

export const PageAnimationProvider: FC = ({ children }) => {
	const [pageAnimation, setPageAnimation] = useState<{}>(defaultState.animation);
	const changeAnimation = (newAnim: {}) => {
		setPageAnimation(newAnim);
    };
    
	return (
		<pageAnimationContext.Provider
			value={{
				animation: pageAnimation,
				changeAnimation,
			}}
		>
			{children}
		</pageAnimationContext.Provider>
	);
};
