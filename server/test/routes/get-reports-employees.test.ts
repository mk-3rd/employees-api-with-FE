import { destroyTestDb, generateTestDb } from "../test-db";
import getTestFastify from "../test-fastify";

const app = getTestFastify();

describe("GET /api/reports/employees", () => {
  beforeEach(async () => {
    await generateTestDb(app);
  });

  afterEach(async () => {
    await destroyTestDb(app);
  });

  it("should return all tribes with employees", async () => {
    const res = await app.inject({
      url: "/api/reports/employees",
      method: "GET",
    });

    const response = res.json();
    expect(response).toHaveLength(3);
    console.log(response.length)
  });

  it("should return correct report structure", async () => {
    const res = await app.inject({
      url: "/api/reports/employees",
      method: "GET",
    });

    const response = res.json();

    expect(response[1]).toEqual({
        tribe: 'Billing',
        employees: [
          {
            id: 4,
            name: 'The Bride',
            title: 'Software Engineer',
            tribe_id: 2
          },
          { id: 5, name: 'Pai Mei', title: 'EM', tribe_id: 2 },
          { id: 6, name: 'Bill', title: 'PM', tribe_id: 2 },
          {
            id: 7,
            name: 'Hattori Hanzo',
            title: 'DevOps Engineer',
            tribe_id: 2
          }
        ]
      });
  });

  
   
});