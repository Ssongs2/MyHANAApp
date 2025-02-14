const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {
  // 루트 페이지 응답 추가
  this.on('GET', '/', async (req) => {
    return "Welcome to MyHANAApp!";
  });
});
