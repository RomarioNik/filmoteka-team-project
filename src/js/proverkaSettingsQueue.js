export function searchingInfoButtonQueue(btn) {
  const buttonProverka = btn.dataset.id;
  const localeArrayProverka = JSON.parse(localStorage.getItem('historyQueue'));
  if (localeArrayProverka === null) {
    localStorage.setItem('historyQueue', JSON.stringify([]));
    return false;
  }

  if (localeArrayProverka.includes(buttonProverka)) {
    return true;
  }
  return false;
}
