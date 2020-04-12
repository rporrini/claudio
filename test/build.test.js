import { compile } from "./webpack.testdouble"

test('webpack should compile', () => {
    return expect(compile()).resolves.toBeTruthy()
})
