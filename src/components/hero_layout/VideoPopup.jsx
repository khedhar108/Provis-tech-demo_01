import { useState } from "react";
import YouTube from "react-youtube";
import Modal from "react-bootstrap/Modal";

const VideoPopup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="z-50">
      <button onClick={openModal} className="btn btn-secondary">
        Play Demo
      </button>
      <Modal
        show={isModalOpen}
        onHide={closeModal}
        contentClassName="video-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Player Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <YouTube videoId="sGZ6AlAnULc" opts={opts} />
        </Modal.Body>
        <Modal.Footer>
          <button onClick={closeModal} className="btn btn-danger">
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export { VideoPopup };
