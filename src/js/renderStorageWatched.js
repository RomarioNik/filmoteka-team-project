export function renderLocaleWatch () {
    const arrayLocaleWatch = localStorage.getItem('historyWatched')
    const arrayPeredachaWatched = JSON.parse(arrayLocaleWatch)
    return arrayPeredachaWatched
    // const liWatchedRender = arrayLocaleWatch.forEach(el => {
        
    // });
    }