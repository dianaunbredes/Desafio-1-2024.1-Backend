function checkCashRegister(price, cash, cid) {
  const nomes   = ["ONE HUNDRED", "TWENTY", "TEN", "FIVE", "ONE", "QUARTER", "DIME", "NICKEL", "PENNY"];
  const valores = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1];

  let troco = Math.round((cash - price) * 100);

  // guarda a gaveta num objeto: gaveta["QUARTER"] vale 425, por exemplo
  const gaveta = {};
  let totalGaveta = 0;
  for (let i = 0; i < cid.length; i++) {
    const centavos = Math.round(cid[i][1] * 100);
    gaveta[cid[i][0]] = centavos;
    totalGaveta = totalGaveta + centavos;
  }

  if (totalGaveta < troco) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (totalGaveta === troco) {
    return { status: "CLOSED", change: cid };
  }

  const change = [];

  for (let i = 0; i < nomes.length; i++) {
    const disponivel = gaveta[nomes[i]];   // procura pelo nome, sem depender da ordem
    let pego = 0;

    while (troco >= valores[i] && pego + valores[i] <= disponivel) {
      pego = pego + valores[i];
      troco = troco - valores[i];
    }

    if (pego > 0) {
      change.push([nomes[i], pego / 100]);
    }
  }

  if (troco > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: change };
}
