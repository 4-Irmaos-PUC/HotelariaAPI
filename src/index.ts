const express = require("express");
const app = express();
const PORT = 3000;
 
app.get("/", (req: any, res: any) => {
    res.json({message: 'ok2'});
});
 
app.listen(PORT, () => {
    console.log(`Running in http://localhost:${PORT}`);
})