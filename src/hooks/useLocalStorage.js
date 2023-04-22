export function useLocalStorage() {
  let parsedUser;
  const localStorageUser = localStorage.getItem("user");
  function insert(name) {
    if (!localStorageUser) {
      localStorage.setItem("user", JSON.stringify({ name }));
      parsedUser = [];
    }
  }

  parsedUser = JSON.parse(localStorageUser);

  return { user: parsedUser, insert };
}
