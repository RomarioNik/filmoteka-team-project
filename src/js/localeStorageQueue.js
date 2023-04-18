let quequeHistory = [];
// function localeSettingQueue (link) {
//     quequeHistory.push(link)
//     localStorage.setItem('historyQueue', JSON.stringify(quequeHistory))
// };
//  export function setIdLocaleStorageQueue (event) {
// let idButtonLocaleQ = event.target.dataset.id
// localeSettingQueue(idButtonLocaleQ)
// }
export function setIdLocaleStorageQueue (event) {
    let idButtonLocaleQ = event.target.dataset.id
    if(quequeHistory.includes(idButtonLocaleQ)){
      const indexDel = quequeHistory.indexOf(idButtonLocaleQ);
      quequeHistory.splice(indexDel,1)
      localStorage.setItem('historyQueue', JSON.stringify(quequeHistory))
      event.target.style.backgroundColor === '#212121'
      return
    }
    quequeHistory.push(idButtonLocaleQ)
localStorage.setItem('historyQueue', JSON.stringify(quequeHistory))
}
