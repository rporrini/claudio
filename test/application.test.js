import { compile as compilation } from "./webpack.testdouble"

let compiledApplication;
let index;

beforeAll(async () => {
    compiledApplication = await compilation()
    index = compiledApplication.readFileSync('docs/index.html', 'utf8')
    document.documentElement.innerHTML = index
    require('../src/application')
})

describe('Webpack compilation', () => {
    
    test('webpack should compile', () => {
        expect(compiledApplication).toBeTruthy()
    })
    
    test('webpack should copy the assets', () => {
        const assets = compiledApplication.readdirSync('docs/assets')
    
        expect(assets).toContain('mystery.png')
        expect(assets).toContain('pregnancy.gif')
    })
    
    test('webpack should include the app in the index', () => {
        expect(index).toMatch('app')
    })
})

describe('application', () => {

    test('should attach the last updated string to the page', () => {
        expect(document.body.innerHTML).toMatch('aggiornamento')
    })

    test('should attach the last updated minute string to the page', () => {
        expect(document.body.innerHTML).toMatch(/minuti|secondi/)
    })
})