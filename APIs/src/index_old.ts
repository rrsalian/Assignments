const express = require('express')
const app = express()
<<<<<<< HEAD:APIs/src/index.ts

=======
app.disable('x-powered-by');
>>>>>>> 1cfd5ae8ca4e9ca523dbd7a557d5e0212337aa6d:APIs/src/index_old.ts
const port = 3000

app.get('/', (req, res) => {
  
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})