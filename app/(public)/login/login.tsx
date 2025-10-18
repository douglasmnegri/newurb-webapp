export const login = async (creds: {
  email: string;
  password: string;
}): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (creds.email === "harry@gmail.com" && creds.password === "teste123") {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
};