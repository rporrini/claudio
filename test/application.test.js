import { compile as compilation } from "./webpack.testdouble"

beforeAll(async () => {
    const compiledApplication = await compilation()
    document.documentElement.innerHTML = compiledApplication.readFileSync('docs/index.html', 'utf8')
    require('../src/application')
})

test('should attach the last updated string to the page', () => {
    expect(document.body.innerHTML).toMatch('aggiornamento')
})

test('should attach the last updated minute string to the page', () => {
    expect(document.body.innerHTML).toMatch(/minuti|secondi/)
})
