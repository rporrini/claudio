import {lastUpdated} from './lastUpdated'
import { constant } from './minutes'
import { lastUpdatedElement } from './lastUpdatedElement'

const updated = lastUpdated()
                    .withPrinter(constant('14 Aprile 2020'))
                    .starting(38)
                    .from(Date.now)

document.body.getElementsByTagName('footer')[0]
             .appendChild(lastUpdatedElement(updated))