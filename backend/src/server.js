import express from 'express';
import { JSDOM } from 'jsdom';

const app = express();

const dom = new JSDOM('<!DOCTYPE html><p>Hello world</p>');

console.log(dom.window.document.querySelector('p').textContent);

app.get('/', (req, res) => {
  res.send(dom);
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
