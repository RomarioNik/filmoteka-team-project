let quequeHistory = [];
export function localeSettingQueue (link) {
    quequeHistory.push(link)
    localStorage.setItem('historyQueue', quequeHistory)
}     