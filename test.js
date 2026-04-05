const request = require("supertest");
const app = require("./app");

request(app)
  .get("/health")
  .expect(200)
  .then(() => {
    console.log("Test Passed ✅");
    process.exit(0);
  })
  .catch(() => {
    console.log("Test Failed ❌");
    process.exit(1);
  });