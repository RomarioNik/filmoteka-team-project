export function searchingInfoButtonQueue (btn) {
    const buttonProverka = btn.dataset.id
    const localeArrayProverka = localStorage.getItem('historyQueue')
    if (localeArrayProverka.includes(buttonProverka)){
    return true   
    }
    return false
    }