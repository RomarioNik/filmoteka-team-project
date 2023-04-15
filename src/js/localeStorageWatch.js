let watchedHistory = []
export function localeSettingsWatch (link) {
    watchedHistory.push(link)
localStorage.setItem('historyWatched', watchedHistory)
}