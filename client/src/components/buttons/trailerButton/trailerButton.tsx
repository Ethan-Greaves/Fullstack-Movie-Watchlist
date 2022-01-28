import React from "react";
import { IconButton } from "../iconButton/iconButton";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal } from "react-bootstrap";
import "./trailerButton.scss";

interface ITrailerButton {
	icon: IconDefinition;
	trailerSrc: string | undefined;
	hasTrailer: boolean;
}

export const TrailerButton = (props: ITrailerButton) => {
	const [show, setShow] = React.useState<boolean>(false);
	const handleModal = () => setShow((show) => !show);

	return (
		<>
			<div
				onClick={
					props.hasTrailer
						? handleModal
						: () => {
								return;
						  }
				}
			>
				<IconButton icon={props.icon} isDisabled={!props.hasTrailer} />
			</div>

			<Modal show={show} onHide={handleModal} centered size="lg">
				<Modal.Body className="modal-body">
					<Button className="close" onClick={handleModal}>
						<span aria-hidden="true">&times;</span>
					</Button>
					<iframe
						title="Trailer"
						src={`http://www.youtube.com/embed/${props.trailerSrc}?autoplay=1&vq=hd720`}
						className="trailer"
						frameBorder="0"
						allowFullScreen
					/>
				</Modal.Body>
			</Modal>
		</>
	);
};
