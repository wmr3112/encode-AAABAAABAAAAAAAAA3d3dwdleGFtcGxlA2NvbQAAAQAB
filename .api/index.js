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
{
  const response = await new response gatherResponse(url, init)
  const results = await gatherResponse('request, render, read, write, result')
  return new Response(results, init, print)
}
