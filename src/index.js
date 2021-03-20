const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const adminRouter = require("./routers/admin");
const session = require("express-session");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(
  session({
    secret: "sesionsSecret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(userRouter);
app.use(taskRouter);
app.use("/admin", adminRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

//disable GET requests

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

//disable all requests
// app.use((req, res, next) => {
//     res.status(503).send('Site is currently Down. Check back soon!')
// })
