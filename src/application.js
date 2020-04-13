import {lastUpdated} from './lastUpdated'

const now = Date.now
const updated = lastUpdated().starting(39).from(now)

const footer = document.body.getElementsByTagName('footer')[0]
const lastUpdatedElement = document.createElement('span')
lastUpdatedElement.innerHTML = ` Ultimo aggiornamento: ${updated.asString()}.`

footer.appendChild(lastUpdatedElement)