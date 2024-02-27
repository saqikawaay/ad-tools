
import React from 'react'
import { GoogleAdsApi } from 'google-ads-api'
import express from 'express'; 


//initialise the express app and port
const app = express();
const port = 3000;


//TODO TODO create a route to get the accounts
app.get('/accounts', async (req, res) => {
    const ads = new GoogleAdsApi({
        client_id: 'YOUR_CLIENT_ID',


        client_secret: 'YOUR_CLIENT_SECRET',
        developer: 'YOUR_DEVELOPER_TOKEN',
    });
  });
  
