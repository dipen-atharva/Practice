const fs = require('fs');

db = connect('mongodb://localhost/queryPrac');

db.employees.insertMany( [
   { "name": "Alicwe", "department": "engineering" },
   { "name": "wBob", "department": "sales" },
   { "name": "wCarol", "department": "finance" }
] )

const document = db.employees.findOne();

fs.writeFileSync('employee.json', JSON.stringify(document));