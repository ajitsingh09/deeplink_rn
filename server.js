const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/well-known/associated-app', (req, res) => {
    // Sample JSON data
    const jsonData = {
      name: 'My App',
      version: '1.0.0',
      author: 'John Doe'
    };
  
    // Send JSON response
    res.json(jsonData);
  });
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
