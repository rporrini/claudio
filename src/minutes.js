const readable = delta => delta > 1 ? `${delta} minuti`: 'pochi secondi'
const echo = minutes => `${minutes}`

export {readable, echo}