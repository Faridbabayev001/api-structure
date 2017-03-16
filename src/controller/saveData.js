import mongoose from 'mongoose';
import { Router } from 'express';
import bodyParser from 'body-parser';
import unirest from "unirest";
import parser from "xml2json";
export default({ config, db }) => {
  let api = Router();

  // '/api/save/'
  api.get("/", (req,res) =>{
    let Request = unirest.get('http://www.thomas-bayer.com/sqlrest/PRODUCT/2/');
     Request.type('xml');
   Request.header('Accept', 'application/xml').end((response)=> {
     let xml = response.body;
     let json = parser.toJson(xml);
     res.send(json);
     });
  })
  return api;
}
