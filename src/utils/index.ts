export const URL_SEARCH_PARAMS_FORMATTER = (params: Record<string, string | number | boolean>) => {
  const urlSearchParams = new URLSearchParams()

  for (const paramKey in params) {
      if (params.hasOwnProperty(paramKey))
        urlSearchParams.append(paramKey, String(params[paramKey]))
  }

  return urlSearchParams
}
