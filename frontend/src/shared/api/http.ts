export const post = async (
  url: string,
  body: { [keys: string]: any },
  options: RequestInit = {},
) => {
  const response = await fetch(url, {
    ...options,
    body: JSON.stringify(body),
    method:"POST",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  return response.json();
};


export const put = async (
  url: string,
  body: { [keys: string]: any },
  options: RequestInit = {},
) => {
  const response = await fetch(url, {
    ...options,
    body: JSON.stringify(body),
    method:"PATCH",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  return response.json();
};
