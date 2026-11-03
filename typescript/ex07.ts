type Id = string | number

function mostrarId(id: Id): void {
  if (typeof id === "string") {
    console.log(`O ID é: ${id.toUpperCase()}`);
  } else {
    console.log(`O ID é: ${id.toFixed(2)}`);
  }
}

mostrarId("abc");  
mostrarId(7);      