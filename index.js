import path from "path"
import fs from "fs"
import http from "http"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

let server = http.createServer(function(request, response){
    let pub = path.join(__dirname, "public");
    let filePath;
    switch(request.url){
        case "/":
            response.writeHead(200, {"content-type": "text/html"})
            filePath = path.join(pub, "index.html")
            break
        case "/contacts":
            response.writeHead(200, {"content-type": "text/html"})
            filePath = path.join(pub, "contacts.html")
            break
        case "/style.css":
            response.writeHead(200, {"content-Type": "text/css"})
            filePath = path.join(pub, "style.css")
            break
        default: 
            response.writeHead(404)
            response.end("<h1 style='font-size: 100px'>404</h1>")

    }
    let content = fs.readFileSync(filePath)
    response.end(content)

})

server.listen(3000)