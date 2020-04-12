const print = delta => delta > 1 ? `${delta} minuti`: 'pochi secondi'

const lastUpdated = (now, fromMinute = 0) => ({
    asString: () => {
        if (!now) return 'pochi secondi'
        const currentMinutes = new Date(now()).getMinutes()
        if(currentMinutes > fromMinute) return print(currentMinutes - fromMinute)
        if(currentMinutes < fromMinute) return print(60 - fromMinute + currentMinutes)
        return 'pochi secondi'
    },
    starting: fromMinute => lastUpdated(now, fromMinute),
    from: now => lastUpdated(now, fromMinute)
})

export { lastUpdated }