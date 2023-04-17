import { ThemoviedbAPI } from './themoviedb-api'
export function ulAdd (event) {
if (event.target.nodeName !== 'UL') {
let idLi = event.target.dataset.id
return idLi
}
return
}