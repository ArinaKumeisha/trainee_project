export const getStorageName = (name: string) => {
  const storageName = localStorage.getItem(name)!;
  return JSON.parse(storageName)?.name !== name;
};

export const setUserData = (name: string, password: string) => {
  localStorage.setItem(name, JSON.stringify({ name, password }));
};
