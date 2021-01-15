export const GA_TRACKING_ID = process.env.GAID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string, dataObject: Record<string, string>): void => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
    custom_map: dataObject
  })
}
