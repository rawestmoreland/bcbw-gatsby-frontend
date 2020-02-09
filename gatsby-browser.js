/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

require('bootstrap/dist/css/bootstrap.min.css')
require('./src/styles/layout.css')

export { default as wrapRootElement } from './src/state/ReduxWrapper'
