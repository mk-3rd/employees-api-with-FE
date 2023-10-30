import { destroyTestDb, generateTestDb } from "../test-db";
import getTestFastify from "../test-fastify";

const app = getTestFastify();

describe("POST /api/employees/:id", () => {
  beforeAll(async () => {
    await generateTestDb(app);
  });

  afterAll(async () => {
    await destroyTestDb(app);
  });

  it("should return success true, ", async () => {
    const res = await app.inject({
      url: "/api/employees",
      method: "POST",
      body: {
        "name": "The Dude",
        "title": "Bouncer",
        "tribe_id": 3
        }
    });

    const response = res.json();

    expect(response).toEqual({
      success: true
    });
  });

  it("should return new Employee DTO by id", async () => {
    const res = await app.inject({
      url: "/api/employees/11",
      method: "GET",
    });

    const response = res.json();

    expect(response).toEqual({
      id: 11,
      name: "The Dude",
      title: "Bouncer",
      tribe: {
        id: 3,
        name: "Gears",
        department: "Product Platform",
      }
    });
  });

});
