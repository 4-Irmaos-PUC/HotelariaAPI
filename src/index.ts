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

app.use("/cliente", ClienteRouter);
app.use("/quarto", QuartoRouter);
app.use("/hotel", HotelRouter);
app.use("/reserva", ReservaRouter);
app.use("/checkin", CheckInRouter);
app.use("/checkout", CheckOutRouter);
app.use("/notafiscal", NotaFiscalRouter);
app.use("/avaliacao", AvaliacaoRouter);
app.use("/solicitacao", SolicitacaoRouter);
app.use("/servico", ServicoRouter);

app.listen(PORT, () => {
    console.log(`Running in http://localhost:${PORT}`);
})
