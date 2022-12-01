const employee = { 
    name: 'Dylan',
    streetAddress: '1368 Wolff Street',
};

    function updateEmployeeWithKeyAndValue(employee, key, value) {
    
        const newObj = {  
            name: "Sam",
            streetAddress: "11 Broadway" 
    };
        newObj[key] = value;
        return newObj;
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {

    employee[key] = value;
    return employee;

}

let obj = {
    name: "Sam",
    streetAddress: "11 Broadway", 
    };

    destructivelyUpdateEmployeeWithKeyAndValue(obj, "streetAddress", "12 Broadway");

        deepEqual(obj, { name: "Sam", streetAddress: "12 Broadway" } );

    
function deleteFromEmployeeByKey(employee, key, value) {
    
    const newEmployee = {  
        name: "Sam",
        streetAddress: "11 Broadway" 
        };

        delete newEmployee[key];
        return newEmployee;
        
    }

    function destructivelyDeleteFromEmployeeByKey(employee, key, value) {

        employee[key] = value;
        return employee;
    
    }
    
    let key = {
        name: "Sam",
        streetAddress: "11 Broadway", 
        };
    
        destructivelyDeleteFromEmployeeByKey(key, "streetAddress", "12 Broadway");
    
            deepEqual(key, { name: "Sam", streetAddress: "12 Broadway" } );

    