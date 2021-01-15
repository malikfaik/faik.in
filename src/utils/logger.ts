import pino from 'pino'

const config = {
  serverUrl: process.env.REACT_APP_API_PATH
}

const pinoConfig = {
  browser: {
    asObject: true,
    transmit: null
  }
}

if (config.serverUrl) {
  pinoConfig.browser.transmit = {
    level: 'info',
    send: (level, logEvent) => {
      const msg = logEvent.messages[0]

      const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        type: 'application/json'
      }
      const blob = new Blob([JSON.stringify({ msg, level })], headers)
      navigator.sendBeacon(`${config.serverUrl}`, blob)
    }
  }
}

const logger = pino(pinoConfig)

export default logger
