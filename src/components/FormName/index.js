import { useState } from "react";
import { useFormInput } from "../../hooks/useFormInput";

export default function FormName(props) {
  const { setShowModal } = props;
  const nameProps = useFormInput("");
  return (
    <>
      <div className="relative p-1 flex-auto">
        <img
          src={"welcome.png"}
          alt={"welcome"}
          className="h-full w-full object-cover object-center lg:h-full lg:w-3/6 m-auto"
        />
        <p className=" text-black text-lg leading-relaxed text-center">
          Hi there! before to start, what is your name?
        </p>
        <input
          {...nameProps}
          className="flex m-auto shadow appearance-none border rounded w-7/12 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Name *"
          required
        />
      </div>
      <div className="flex m-auto mb-5 items-center justify-end  rounded-b">
        <button
          className="bg-slate-800 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(false)}
        >
          Start!
        </button>
      </div>
    </>
  );
}
