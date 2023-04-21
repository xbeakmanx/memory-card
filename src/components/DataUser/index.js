import { useState } from "react";
import { FormName, Modal } from "..";

export default function DataUser() {
  const [showModal, setShowModal] = useState(true);

  return (
    <Modal setShowModal={setShowModal} showModal={showModal}>
      <FormName />
    </Modal>
  );
}
