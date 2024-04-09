for (let i = 0; i < 1; i++) {
  const vConst = i;
  let vLet = i;
  var vVar = i;
}

//Видны только внутри блока
console.log(vLet);
console.log(vConst);

//Виден в глобальной области
console.log(vVar);
