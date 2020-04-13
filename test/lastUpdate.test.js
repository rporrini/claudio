import { lastUpdated } from '../src/lastUpdated'
import { echo } from '../src/minutes'

test('should exist', () => {
    expect(lastUpdated).toBeDefined()
})

test('should print a default string when not specified', () => {
    const result = lastUpdated().withPrinter(echo).asString()

    expect(result).toBe('0')
})

test('should print 0 when the delta is 0 minutes', () => {
    const now = () => new Date('2011-10-10T14:15:00')

    const result = lastUpdated().withPrinter(echo).from(now).starting(15).asString()

    expect(result).toBe('0')
})

test('should signal minutes from the start of the hour', () => {
    const now = () => new Date('2011-10-10T14:15:00')

    const result = lastUpdated().withPrinter(echo).from(now).asString()

    expect(result).toBe('15')
})

test('should signal minutes from an arbitrary minute already passed', () => {
    const now = () => new Date('2011-10-10T14:15:00')

    const result = lastUpdated().withPrinter(echo).from(now).starting(3).asString()

    expect(result).toBe('12')
})

test('should signal minutes from an arbitrary minute ahead in time', () => {
    const now = () => new Date('2011-10-10T14:15:00')

    const result = lastUpdated().withPrinter(echo).from(now).starting(43).asString()

    expect(result).toBe('32')
})
