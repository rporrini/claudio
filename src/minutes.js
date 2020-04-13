const readable = delta => delta > 1 ? `${delta} minuti fa`: 'pochi secondi fa'
const echo = minutes => `${minutes}`
const constant = string => () => string

export {readable, echo, constant}