export function searchingInfoButtonWatch(btn) {
  const buttonProverka = btn.dataset.id;
  const localeArrayProverka = JSON.parse(
    localStorage.getItem('historyWatched')
  );

  if (localeArrayProverka === null) {
    localStorage.setItem('historyWatched', JSON.stringify([]));
    return false;
  }

  if (localeArrayProverka.includes(buttonProverka)) {
    return true;
  }
  return false;
}
