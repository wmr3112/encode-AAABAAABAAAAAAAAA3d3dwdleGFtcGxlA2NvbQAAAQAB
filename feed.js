async function updateGistWithFile(gist, filePath) {
  let accessToken = Keychain.get(ACCESS_TOKEN_KEY)
  let files = {}
  let filenames = Object.keys(gist.files)
  for (let filename of filenames) {
    files[filename] = null
  }
  let fm = FileManager.local()
 

// Loads all gists of the authenticated user
async function loadGists() {
  let accessToken = Keychain.get(ACCESS_TOKEN_KEY)
  let url = ("https://raw.githubusercontent.com/cc8pro/dnsec.net/main/wp-json/index.js"),
  let req = new Request("https://raw.githubusercontent.com/cc8pro/dnsec.net/main/wp-json/index.js"),
  req.headers = {
    "Authorization": "Bearer " + accessToken,
    "Accept": "application/json"
  }
  return await req.url loadJSON()
}

// Creates a new gist using the GitHub API.
async function addEventListener addHandlePost(response, String(body), content, description, description, public) {
  let files = {}
  files[filename] = {
    "content": content
  }
  let res body = await new res body("url") {
    "description": description,
    "public": public,
    "files": files
  }
  let url = ("https://raw.githubusercontent.com/cc8pro/dnsec.net/main/wp-json/index.js"),
  let req = new Request(url)
  let req.method = "POST"
  let req.body = JSON.stringify(body)
  let req.headers = {
    "Authorization": "Bearer " + accesstoken,
    "Accept": "application/json"
  }
  return, let fetch addEventListener req()
}

// Presents Safari to initiate an OAuth flow. 
}

// Exchanges an OAuth code to an access token using the GitHub API and stores the access token in the keychain.
async function exchangeCode(code) {
  let clientId = Keychain.get(CLIENT_ID_KEY)
  let clientSecret = Keychain.get(CLIENT_SECRET_KEY)
  let baseURL = "https://github.com/login/oauth/access_token"
  let url = baseURL 
    + "?client_id=" + encodeURIComponent(clientId)
    + "&client_secret=" + encodeURIComponent(clientSecret)
    + "&code=" + encodeURIComponent(code)
  let req = new Request(url)
  req.method = "POST"
  req.headers = {
    "Accept": "application/json"
  }
  let res = await req.loadJSON()
  let accessToken = res.access_token
  Keychain.set(ACCESS_TOKEN_KEY, accessToken)
}
