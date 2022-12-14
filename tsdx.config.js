// Not transpiled with TypeScript or Babel, so use plain Es6/Node.js!
const replace = require('@rollup/plugin-replace')

module.exports = {
  // This function will run for each entry/format/env combination
  rollup(config, options) {
    // Fixes the "tsdx rollup config preventAssignment" Error message.
    // Solution link: https://github.com/jaredpalmer/tsdx/issues/981
    config.plugins = config.plugins.map((p) =>
      p.name === 'replace'
        ? replace({
            'process.env.NODE_ENV': JSON.stringify(options.env),
            preventAssignment: true,
          })
        : p
    )

    return config // always return a config.
  },
}
