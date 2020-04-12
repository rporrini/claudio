import { lastUpdated } from '../src/lastUpdated'

test('should exist', () => {
    expect(lastUpdated).toBeDefined()
})

test('should print a default string when not specified', () => {
    const result = lastUpdated().asString()

    expect(result).toBe('pochi secondi')
})

test('should print a default string when the delta is less than 2 minutes', () => {
    const now = () => new Date('2011-10-10T14:15:00')

    const result = lastUpdated().from(now).starting(14).asString()

    expect(result).toBe('pochi secondi')
})

test('should signal minutes from the start of the hour', () => {
    const now = () => new Date('2011-10-10T14:15:00')

    const result = lastUpdated().from(now).asString()

    expect(result).toBe('15 minuti')
})

test('should signal minutes from an arbitrary minute already passed', () => {
    const now = () => new Date('2011-10-10T14:15:00')

    const result = lastUpdated().from(now).starting(3).asString()

    expect(result).toBe('12 minuti')
})

test('should signal minutes from an arbitrary minute ahead in time', () => {
    const now = () => new Date('2011-10-10T14:15:00')

    const result = lastUpdated().from(now).starting(43).asString()

    expect(result).toBe('32 minuti')
})