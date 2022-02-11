import { SWRConfiguration } from 'swr'

import requestInstance from '../utils/request'

// See options here: https://swr.vercel.app/docs/options
const swrConfig: SWRConfiguration = {
  suspense: true,
  fetcher: async (url, options) => {
    const resp = await requestInstance.get(url, options)
    if (!resp.ok) {
      throw new Error(resp.statusText)
    }
    return resp.json()
  },
}

export default swrConfig
