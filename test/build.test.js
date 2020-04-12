import { compile as compilation } from "./webpack.testdouble"

let compiledApplication;

beforeAll(async () => {
    compiledApplication = await compilation()
})

test('webpack should compile', () => {
    expect(compiledApplication).toBeTruthy()
})

test('webpack should copy the assets', () => {
    const assets = compiledApplication.readdirSync('docs/assets')

    expect(assets).toContain('mystery.png')
    expect(assets).toContain('pregnancy.gif')
})

test('webpack should include the app in the index', () => {
    const index = compiledApplication.readFileSync('docs/index.html', 'utf8')
    
    expect(index).toMatch('app')
})
