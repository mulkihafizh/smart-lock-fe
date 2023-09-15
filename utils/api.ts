export const login = async (params: { username: string; password: string }) => {
  const stringifiedParams = JSON.stringify(params);
  const res = await fetch("http://localhost:8000/api/user/signin", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: stringifiedParams,
  });
  return res.json();
};

export const getUser = async (token: string) => {
  const res = await fetch("http://localhost:8000/api/user/getUser", {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  return res.json();
};

export const getDoor = async () => {
  const res = await fetch("http://localhost:8000/api/door/get", {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
};

export const getDoorById = async (id: string) => {
  const res = await fetch(`http://localhost:8000/api/door/get/${id}`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
};

export const getHistoryById = async (id: string) => {
  const res = await fetch(`http://localhost:8000/api/history/get/${id}`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
};
