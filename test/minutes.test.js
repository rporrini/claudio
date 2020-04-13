import { readable, constant } from '../src/minutes'

describe('readable', () => {
    test('should print the minutes in a humar readable form', () => {
        expect(readable(2)).toBe('2 minuti fa')
    })

    test('should print the seconds under a certain threshold', () => {
        expect(readable(1)).toBe('pochi secondi fa')
    })
})

describe('constant', () => {
    test('should print a costant string', () => {
        const print = constant('the string')

        expect(print()).toBe('the string')
    })
})
