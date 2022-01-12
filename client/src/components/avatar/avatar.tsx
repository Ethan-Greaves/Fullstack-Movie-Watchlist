import React from "react";
import "./avatar.scss";

interface IAvatar {
	src: string;
	user: string;
}

export const Avatar = (props: IAvatar) => {
	return (
		<img
			src={
				!null
					? `https://secure.gravatar.com/avatar${props.src}?s=64`
					: "https://www.seekpng.com/png/detail/110-1100707_person-avatar-placeholder.png"
			}
			className="avatar"
			alt={`${props.user} avatar`}
		/>
	);
};
