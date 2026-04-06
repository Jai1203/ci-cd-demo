const request = require("supertest");
const app = require("./app");

async function runTests() {
  try {
    // Health check
    await request(app).get("/health").expect(200);

    // Addition
    let res = await request(app)
      .post("/add")
      .send({ a: 10, b: 5 });
    if (res.body.result !== 15) throw new Error("Addition failed");

    // Subtraction
    res = await request(app)
      .post("/subtract")
      .send({ a: 10, b: 5 });
    if (res.body.result !== 5) throw new Error("Subtraction failed");

    // Division by zero
    await request(app)
      .post("/divide")
      .send({ a: 10, b: 0 })
      .expect(400);

    console.log("All Tests Passed ✅");
    process.exit(0);

  } catch (err) {
    console.error("Test Failed ❌", err.message);
    process.exit(1);
  }
}

runTests();