async function fetchAndProcessData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => {
      throw new Error(error);
    });
  return response;
}

fetchAndProcessData();
