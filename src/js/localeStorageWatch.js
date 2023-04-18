let watchedHistory = []
// export function localeSettingsWatch (link) {
//     watchedHistory.push(link)
// localStorage.setItem('historyWatched', JSON.stringify(watchedHistory))
// }
// export function setIdLocaleStorageWatch (event) {
//     let idButtonLocaleW = event.target.dataset.id
//     localeSettingsWatch(idButtonLocaleW)
// }
export function setIdLocaleStorageWatch (event) {
    let idButtonLocaleW = event.target.dataset.id
    if(watchedHistory.includes(idButtonLocaleW)){
        const indexDel = watchedHistory.indexOf(idButtonLocaleW);
        watchedHistory.splice(indexDel,1)
        localStorage.setItem('historyWatched', JSON.stringify(watchedHistory))
        return
      }
    watchedHistory.push(idButtonLocaleW)
localStorage.setItem('historyWatched', JSON.stringify(watchedHistory))
}