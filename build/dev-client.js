import 'source-map-support/register'
import 'eventsource-polyfill'

import * as hotClient from 'webpack-hot-middleware/client?noInfo=true&reload=true'

hotClient.subscribe(function (event) {
  if (event.action === 'reload') {
    window.location.reload()
  }
})
