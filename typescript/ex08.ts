enum PapelUsuario {
  Admin = "admin",
  Manager = "manager",
  Employee = "employee",
}
function podeEditar(papel: PapelUsuario): boolean {
  return papel === PapelUsuario.Admin || papel === PapelUsuario.Manager;
}
