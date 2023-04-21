import { useState } from "react";

export default function Modal(props) {
  const { children, showModal, setShowModal } = props;
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative mx-auto max-w-3xl w-6/12">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-400 outline-none focus:outline-none">
                {children}
              </div>
            </div>
          </div>
          <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
