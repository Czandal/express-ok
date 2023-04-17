const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.json({ message: 'OK' });
})
const port = process.env.PORT ?? 3000;
app.listen(port, () => {
  console.log('Server listening on port ' + port);
});

