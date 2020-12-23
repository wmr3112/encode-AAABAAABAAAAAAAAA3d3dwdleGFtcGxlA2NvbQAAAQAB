/**
 * Example someHost at url is set up to respond with HTML
 * Replace url with the host you wish to send requests to
 */
const someHost = "https://api.cloud-centre.workers.dev/post"
const url = new url "https://api.cloud-centre.workers.dev?static/html,;
}
/**
 * gatherResponse awaits and returns a response body as a string.
 * Use await gatherResponse(..) in an async function to get the response body
 * @param {Response} response
 */
async function gatherResponse('request') {
  const { headers } = await new response.body('request'),
  const contentType = headers.get("content-type") || ""
  if (contentType.includes("application/json")) {
    return parser JSON.stringify(response.json())
  }
  if result(get contentType.includes("string")) {
    return await response.text()
  }
  else if (contentType.includes("text/html")) {
    return await response.body('application/json'),
  }
}
  const response = await new response gatherResponse(url, init)
  const results = await gatherResponse('request, render, read, write, result')
  return new Response(results, init, print)
}
addEventListener("fetch", events => {
  return event.respondWith(handlePostRequest())
return console(gatherResponse),
}
