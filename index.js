
const employee = {
    name: "Sam",
    streetAddress: "123 Main St",

}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObject = {...employee}
    newObject[key] = value;
  
    return newObject;
  }

 function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
 {
    employee[key] = value;

    return employee;
 }

 function deleteFromEmployeeByKey(employee, key){
    const newObject = {employee} 
    delete employee.key

    return newObject;
    
    
 }
 
 function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;

 }

