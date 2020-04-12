const { createFsFromVolume, Volume } = require('memfs')
const joinPath = require('memory-fs/lib/join')

const webpack = require('webpack')
const configuration = require('../webpack.config')

const patchMemfs = (fs) => {
    if (fs.join) {
        return fs
    }
    const nextFs = Object.create(fs)
    nextFs.join = joinPath
    return nextFs
}

const buildCompiler = (fs, webpackConfig) => {
    const fileSystem = patchMemfs(fs)
    const compiler = webpack(webpackConfig)
    compiler.outputFileSystem = fileSystem
    compiler.resolvers.context.fileSystem = fileSystem
    return compiler
}

const compile = () => {
    const fileSystem = createFsFromVolume(new Volume())
    const compiler = buildCompiler(fileSystem, configuration())
    return new Promise((resolve, reject) => {
        compiler.run((errors, stats) => {
            if (errors) reject (new Error(errors))
            if (stats.hasErrors()) reject(new Error(stats.toJson().errors))
            resolve(fileSystem);
        })
    }) 
}

export { compile }