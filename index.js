import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Allan", 11122233309);
const cliente2 = new Cliente("Camilla", 33344455508);
const contaCorrenteAllan = new ContaCorrente(1001, cliente1);
contaCorrenteAllan.depositar(500);
const conta2 = new ContaCorrente(102, cliente2);

contaCorrenteAllan.transferir(200, conta2);

console.log(contaCorrenteAllan);
console.log(cliente2);
console.log(ContaCorrente.numeroDeContas)
