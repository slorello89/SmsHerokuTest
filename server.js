const app = require('express')()
const bodyParser = require('body-parser')
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
app.listen(process.env.PORT || 5000);

app.post('/webhooks/inbound-message', (req, res) => {
    console.log(req.body);
    res.status(200).end();
  });

  app.post('/webhooks/dlr', (req, res) =>{
    console.log(req.body)
    res.status(200).end();
  })
  app.post('/webhooks/insight', (req, res)=>{
    console.log(req.body)
    res.status(200).end();
  });