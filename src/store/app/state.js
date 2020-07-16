export function initialState () {
  return {
    // SETTINGS CAN BE CHANGED
    settings: {
      pow: 1,
      changeaddress: false,
      checkbackends: true,
      followlinks: true,
      receiveinterval: 10000,
      nfctoken: process.env.VUE_APP_NFC_TOKEN,
      node: [
        {
          address: 'watt.cash',
          protocol: 'http',
          port: 7076,
          path: '',
        },
	{
          address: 'account.watt.cash',
          protocol: 'https',
          port: 443,
          path: '',
        }
      ],
      presets: {
        'mynano.ninja': {
          port: 443,
          path: '/api/node',
          protocol: 'https',
          headers: {
            'Content-Type': 'application/json'
          }
        },
        'proxy.nanos.cc': {
          port: 443,
          path: '/proxy',
          protocol: 'https',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      }
    },
    // DO NOT CHANGE ANYTHING BELOW
    privatekey: null,
    pow: null,
    ready: false,
    history: [],
    pending: [],
    node: {
      address: null,
      port: null,
      path: '',
      auth: null
    }
  }
}

export default function () {
  return initialState()
}
