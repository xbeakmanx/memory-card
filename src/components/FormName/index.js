import { Button } from "..";
import { useFormInput } from "../../hooks/useFormInput";

export default function FormName({ setShowModal, setEnableScroll }) {
  const nameProps = useFormInput("");
  return (
    <>
      <div className="form">
        <img src="welcome.png" alt="welcome" className="form__image" />
        <p className=" form__title">
          Hi there! before we start, tell us your name!
        </p>
        <input
          {...nameProps}
          className="form__input"
          type="text"
          placeholder="Name *"
        />
        {!nameProps?.value ? (
          <p className="form__required ">Required field</p>
        ) : null}
      </div>
      <div className="form__boxBtn">
        <Button
          className="form__btn"
          onClick={() => {
            setShowModal(false);
            setEnableScroll(false);
            nameProps.onSave();
          }}
          disabled={!nameProps.value}
        >
          Start!
        </Button>
      </div>
    </>
  );
}
