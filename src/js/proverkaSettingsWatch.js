export function searchingInfoButtonWatch (btn) {
const buttonProverka = btn.dataset.id
const localeArrayProverka = localStorage.getItem('historyWatched')
if (localeArrayProverka.includes(buttonProverka)){
return true
}
return false
}