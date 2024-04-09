function handleRefError() {
  try {
    // console.log(i);
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.log(error);
    } else {
      throw Error("Иная ошибка ", error);
    }
  }
}

handleRefError(i);
