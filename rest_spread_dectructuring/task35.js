function createContact(partialContact) {
  return {
    id: generateId(),
    createdAt: new Date(),
    list: "default",
    ...partialContact,
  };
}

console.log(
  createContact({
    firstName: "Mango",
    email: "mango@gmail.com",
    list: "friends",
  })
);
console.log(
  createContact({
    firstName: "Poly",
    email: "poly@gmail.com",
  })
);

function generateId() {
  return "_" + Math.random(toString(36).substring(2, 9));
}
