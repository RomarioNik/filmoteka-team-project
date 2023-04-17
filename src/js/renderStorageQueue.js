export function renderLocaleQueue () {
const arrayLocaleQueue = localStorage.getItem('historyQueue')
const arrayPeredachaQueue = JSON.parse(arrayLocaleQueue)
return arrayPeredachaQueue
// const liQueueRender = arrayLocaleQueue.forEach(el => {
// });
}