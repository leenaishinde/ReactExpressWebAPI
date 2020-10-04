const express = require('express')
const app = express()
const port = 5001

app.get('/api/customers', (req, res) => {
  const customers = [      
          {id:1, firstName: 'Leena', LastName: 'Shinde'},
          {id:2, firstName: 'Ishwari', LastName: 'Shinde'},
          {id:3, firstName: 'Ranveer', LastName: 'Shinde'},
          {id:4, firstName: 'Indrajeet', LastName: 'Shinde'}
         ];

   res.json(customers);
});

app.get('/newEndPoint', (req, res) => {
    res.send('This is newEndpoint!')
  })

app.listen(port, () => {
  console.log(`Server running on port at http://localhost:${port}`)
})
