export const GA_TRACKING_ID = process.env.GAID

interface ExtendedWindow extends Window {
  heap: Heap
}

declare const window: ExtendedWindow & typeof globalThis

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string, dataObject: Record<string, string>): void => {
  window.gtag('set', GA_TRACKING_ID, {
    page_path: url,
    ...dataObject
  })
}

export const setHeapIdentity = async (additionalData: Record<string, unknown>): Promise<void> => {
  const res = await fetch('https://geolocation-db.com/json/')
  const data = await res.json()
  window.heap.identify(data.IPv4)
  window.heap.addUserProperties({ ...data, ...additionalData, dateAccessedISO: new Date().toISOString() })
}
