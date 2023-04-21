import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export function saveFormData() {
  const localStorage = useLocalStorage();
  console.log(localStorage, "localStorage");

  return inputProps;
}
