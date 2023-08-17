// importar o pacoe do express
const express = require('express');

//instanciar o express na vairavel app
const app = express();

// definir a porta do servidor
const PORT = 3000;

//testar servidor
app.listen(PORT, () => console.log(`Running at port ${PORT}`));