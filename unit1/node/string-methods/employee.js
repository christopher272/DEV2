const readline = require('readline-sync');

var employees = []
function employee(name,salary,jobTitle, status){
    this.name = name;
    this.salary = salary;
    this.jobTitle = jobTitle;
    this.status = status|| "full time";
    this.printEmployeeForm = function(){
        console.log(this.name + " is a " + this.status + " employee who makes " + this.salary + " and is a " + this.jobTitle + ".")
    };
}
    var jerry = new employee("jerry smith", "$1/hr",  "family idiot","contract")
    var mark = new employee("mark watney", "$750000/yr", "space pirate")
    var terry = new employee("terry crewes", "$idk", "magic man" )
    employees.push(jerry)
    employees.push(mark)
    employees.push(terry)
    jerry.printEmployeeForm()
    mark.printEmployeeForm()
    terry.printEmployeeForm()
console.log(employees)


