import { useState } from "react";
import { Box, FormName, Modal, Title } from "..";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export default function DataUser() {
  const { user } = useLocalStorage();
  const [showModal, setShowModal] = useState(!user);
  const [enableScroll, setEnableScroll] = useState(showModal);
  return (
    <div className="dataUser">
      {user ? (
        <Box className="dataUser__container-title">
          <Title className="dataUser__title">User: {user?.name}</Title>
        </Box>
      ) : null}
      <Modal
        setShowModal={setShowModal}
        showModal={showModal}
        enableScroll={enableScroll}
        setEnableScroll={setEnableScroll}
      >
        <FormName
          setShowModal={setShowModal}
          setEnableScroll={setEnableScroll}
        />
      </Modal>
    </div>
  );
}
