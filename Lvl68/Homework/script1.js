import Chance from "chance";
const chance = new Chance();

// export = "ამ ფუნქციას გარეთ ვატან"
export function generateUser() {
  return {
    id: chance.guid(),
    name: chance.name(),
    email: chance.email(),
    age: chance.age({ min: 16, max: 40 }),
  };
}