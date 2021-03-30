import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

//this is for getting the server from the api
createServer({
  models: {
    //this is a fake database
    transaction: Model,
  },

  //this is for the fake database have already initial datas
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Website Freelancer',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 9:00:00')
        },
        {
          id: 2,
          title: 'Rent',
          type: 'withdraw',
          category: 'House',
          amount: 1100,
          createdAt: new Date('2021-02-14 11:00:00')
        }
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    //as this is a fake api, we have to create our own data
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })
    
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);