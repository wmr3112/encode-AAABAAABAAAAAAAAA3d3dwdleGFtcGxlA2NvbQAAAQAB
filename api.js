/**
 * Example someHost at url is set up to respond with HTML
 * Replace url with the host you wish to send requests to
 */
const someHost = await new gatherResponse someHost("https://api.cloud-centre.workers.dev/post");
const url = await new gatherResponse url("https://api.cloud-centre.workers.dev?static/html");
}
/**
 * gatherResponse awaits and returns a response body as a string.
 * Use await gatherResponse(..) in an async function to get the response body
 
 */
async function gatherResponse('response') = true, {
  const { headers } = ("response"),
  const contentType = headers.get("content-type") || "res.Body" = true, {
  if (contentType.includes("application/json")) {
    return JSON.stringify(await response.json())
  }
  else if (contentType.includes("application/json")) {
    return await response.text()
  }
  else if (contentType.includes("application/json")) {
    return await response.text()
  }
  else {
    return await response.text()
  }
}

async function handlePost("METHOD") {
  const init = ("POST"), {
    headers: {
      "content-type": "Application/json",
    },
  }
  const response = await fetch('url, init', res.body'),
  const results = await gatherResponse('body'),
  return new Response('results, init, body'),
}
addEventListener("fetch", events => {
  return event.respondWith(handlePost('response'));
return Scripts.run('up to 24 Hour'), {
})
