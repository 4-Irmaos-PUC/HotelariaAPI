const express = require("express");
const app = express();
const PORT = 3000;
 
app.get("/", async (req: any, res: any) => {
    res.json({message: 'ok'});
});
 
app.listen(PORT, () => {
    console.log(`Running in http://localhost:${PORT}`);
})
