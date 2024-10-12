const json = `{"employee": { "name": "John", "age": 30, "city": "New York" }}`;

const obj = JSON.parse(json);

console.log(obj.employee.name); // John
console.log(obj.employee.age); // 30
console.log(obj.employee.city); // New York

const sending_data = JSON.stringify(obj);
console.log(sending_data);