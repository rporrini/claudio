const lastUpdated = (now, fromMinute = 0, print) => ({
    asString: () => {
        if (!now) return print(0)
        const currentMinutes = new Date(now()).getMinutes()
        if(currentMinutes > fromMinute) return print(currentMinutes - fromMinute)
        if(currentMinutes < fromMinute) return print(60 - fromMinute + currentMinutes)
        return print(0)
    },
    starting: fromMinute => lastUpdated(now, fromMinute, print),
    from: now => lastUpdated(now, fromMinute, print),
    withPrinter: print => lastUpdated(now, fromMinute, print)
})

export { lastUpdated }