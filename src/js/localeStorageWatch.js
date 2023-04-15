let watchedHistory = []
export function localeSettingsWatch (film , link) {
    watchedHistory.push(film)
localStorage.setItem(film , link)
}