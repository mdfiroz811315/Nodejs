const express = require('express')
var userRoute = require("./Route/userRoute")
//let contactUs = require("./Route/ContactUs")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const port = 5000

app.use("/user",userRoute)
app.use("/contact",require("./Route/ContactUs"))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})