const storagePrefix = 'digito-';

export const storage = {
  getToken: () => window.localStorage.getItem(`${storagePrefix}token`),
  setToken: (token: string) => {
    window.localStorage.setItem(`${storagePrefix}token`, token);
  },
  removeToken: () => {
    window.localStorage.removeItem(`${storagePrefix}token`);
  },
  setItem: (key: string, value: string) => {
    window.localStorage.setItem(`${storagePrefix}${key}`, value);
  },
  getItem: (key: string) =>
    window.localStorage.getItem(`${storagePrefix}${key}`),
  removeItem: (key: string) =>
    window.localStorage.removeItem(`${storagePrefix}${key}`),
  clearAll: () => window.localStorage.clear(),
};
