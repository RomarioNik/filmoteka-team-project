export function createNameUser(nameUser) {
  let newNmame = nameUser.split('@')[0];
  const bigName = newNmame[0].toUpperCase() + newNmame.slice(1);
  return bigName;
}
