const baseURL = "https://fierce-retreat-60777.herokuapp.com/api/v1/maiaemails";

function post(url, postData) {
  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(postData)
  }).then(resp => resp.json());
}

export function addEmail(email) {
  return post(baseURL, email);
}
