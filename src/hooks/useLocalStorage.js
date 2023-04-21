export function useLocalStorage() {
  let parsedUser;
  function insert() {
    const localStorageUser = localStorage.getItem("USER");
    if (!localStorageUser) {
      localStorage.setItem("USER", JSON.stringify([]));
      parsedUser = [];
    } else {
      parsedUser = JSON.parse(localStorageUser);
    }
  }

  return { user: parsedUser, insert };
}
