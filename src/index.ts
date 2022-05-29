import LoginController from "./controllers/LoginController";

const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

const ClienteRouter = require('./routers/ClienteRouter');
const QuartoRouter = require('./routers/QuartoRouter');
const HotelRouter = require('./routers/HotelRouter');
const ReservaRouter = require('./routers/ReservaRouter');
const CheckInRouter = require('./routers/CheckInRouter');
const CheckOutRouter = require('./routers/CheckOutRouter');
const NotaFiscalRouter = require('./routers/NotaFiscalRouter');
const AvaliacaoRouter = require('./routers/AvaliacaoRouter');
const SolicitacaoRouter = require('./routers/SolicitacaoRouter');
const ServicoRouter = require('./routers/ServicoRouter');

app.post("/login", LoginController.login);
app.use("/cliente", ClienteRouter);
app.use("/quarto", LoginController.authenticate, QuartoRouter);
app.use("/hotel", LoginController.authenticate, HotelRouter);
app.use("/reserva", LoginController.authenticate, ReservaRouter);
app.use("/checkin", LoginController.authenticate, CheckInRouter);
app.use("/checkout", LoginController.authenticate, CheckOutRouter);
app.use("/notafiscal", LoginController.authenticate, NotaFiscalRouter);
app.use("/avaliacao", LoginController.authenticate, AvaliacaoRouter);
app.use("/solicitacao", LoginController.authenticate, SolicitacaoRouter);
app.use("/servico", LoginController.authenticate, ServicoRouter);

app.listen(PORT, () => {
    console.log(`Running in http://localhost:${PORT}`);
})
