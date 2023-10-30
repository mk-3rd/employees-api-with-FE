import { destroyTestDb, generateTestDb } from "../test-db";
import getTestFastify from "../test-fastify";

const app = getTestFastify();

describe("DELETE /api/employees/:id", () => {
  beforeAll(async () => {
    await generateTestDb(app);
  });

  afterAll(async () => {
    await destroyTestDb(app);
  });

  it("should return success true, ", async () => {
    const res = await app.inject({
      url: "/api/employees/1",
      method: "DELETE",
    });

    const response = res.json();

    expect(response).toEqual({
      success: true
    });
  });

  it("should return 404 when no deleted Employee found", async () => {
    const res = await app.inject({
      url: "/api/employees/1",
      method: "GET",
    });

    const response = res.json();
    const statusCode = res.statusCode;

    console.log(response)
    expect(statusCode).toEqual(404);
    expect(response).toEqual({
      error: "No employee with id 1 is found",
    });
  });

});
