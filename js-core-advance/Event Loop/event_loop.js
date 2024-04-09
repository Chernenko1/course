function evenOrOddNum(data) {
  return new Promise((res, rej) => {
    if (typeof data !== "number") {
      rej("Error");
    } else if (data % 2) {
      setTimeout(() => res("Odd"), 1000);
    } else {
      setTimeout(() => res("Even"), 2000);
    }
  })
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
}

evenOrOddNum(52);
