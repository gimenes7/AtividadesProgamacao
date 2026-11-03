enum PapelUsuario {
  Admin = "admin",
  Manager = "manager",
  Employee = "employee",
}
function podeEditar(papel: PapelUsuario): boolean {
  return papel === PapelUsuario.Admin || papel === PapelUsuario.Manager;
}
console.log(podeEditar(PapelUsuario.Admin)); // true
console.log(podeEditar(PapelUsuario.Manager)); // true
console.log(podeEditar(PapelUsuario.Employee)); // false
