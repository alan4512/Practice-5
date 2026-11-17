// B2 – Default export: user factory
let nextId = 1;

export default function createUser(name, role) {
  return {
    id: nextId++,
    name,
    role
  };
}
