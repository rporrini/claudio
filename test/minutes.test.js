import { readable } from '../src/minutes'

test('should print the minutes in a humar readable form', () => {
    expect(readable(2)).toBe('2 minuti')
})

test('should print the seconds under a certain threshold', () => {
    expect(readable(1)).toBe('pochi secondi')
})