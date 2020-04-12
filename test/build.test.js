import { compile as compilation } from "./webpack.testdouble"

let compiledApplication;

beforeAll(async () => {
    compiledApplication = await compilation()
})

test('webpack should compile', async () => {
    expect(compiledApplication).toBeTruthy()
})
