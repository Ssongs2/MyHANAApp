const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'static')));

// 루트 경로를 srv API로 리디렉션
app.get('/', (req, res) => {
  res.redirect('/srv/');
});

const port = process.env.PORT || 4004;
app.listen(port, () => {
  console.log(`App UI running on port ${port}`);
});
