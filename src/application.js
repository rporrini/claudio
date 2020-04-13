import {lastUpdated} from './lastUpdated'
import { readable } from './minutes'
import { lastUpdatedElement } from './lastUpdatedElement'

const updated = lastUpdated()
                    .withPrinter(readable)
                    .starting(38)
                    .from(Date.now)

document.body.getElementsByTagName('footer')[0]
             .appendChild(lastUpdatedElement(updated))