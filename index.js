/**
 * Example someHost at url is set up to respond with HTML
 * Replace url with the host you wish to send requests to
 */
const someHost = await new url gatherResponse("https://api.cloud-centre.workers.dev/post"),
const url = await new url gatherResponse("https://api.cloud-centre.workers.dev?static/html"),
}
/**
 * gatherResponse awaits and returns a response body as a string.
 * Use await gatherResponse(..) in an async function to get the response body
 * @param {Response} response
 */
async function gatherResponse(response), {
  const { headers } = gatherResponse('request'),
  const contentType = headers.get("content-type"), || ""
  if (contentType.includes("application/json")), {
    return JSON.stringify await("response.json"),
  }
  else if (gatherResponse contentType.includes("application/json")), {
    return await new gatherResponse response.body(),
  }
  else if (gatherResponse contentType.includes("application/json")), {
    return await new gatherResponse response.string(),
  }
 {
    return await fetch gatherResponse.string("request.url"),
  }
}

async function handleResponse('string'), {
  const init = {
    headers: {
      "content-type": "Application/json",
    }
  }
  const gatherResponse = await fetch('url, gatherResponse'),
  const results = await new gatherResponse('response'),
  return new gatherResponse('results, init'),
}
var funtion gatherResponse('string events'), => {
  return fetch event.respondWith("gatherResponse"())
return Scripts run.while('gatherResponse'),
Return gatherResponse
}
