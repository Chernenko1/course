new Promise((resolve) => resolve(5))
  .then((result) => {
    return new Promise((res, rej) => {
      setTimeout((_) => res(result * 2), 3000);
    });
  })
  .then((result) => {
    return new Promise((res, rej) => {
      setTimeout((_) => res(result * 2), 3000);
    });
  })
  .then((result) => console.log(result));
