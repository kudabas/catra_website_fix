const express=require("express")
const serveStatic=require("serve-static")
const path=require("path")

const app=express()

app.use("/", serveStatic(path.join(__dirname, "/dist")))

const port=process.env.port || 8000
app.listen(port)

console.log("aplikasi berjalan di port"+port)