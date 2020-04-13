const readable = delta => delta > 1 ? `${delta} minuti fa`: 'pochi secondi fa'
const echo = minutes => `${minutes}`

export {readable, echo}