class Employee {
    constructor (name, salary) {
        this.name = name;
        this.salary = salary;
    }
    calcYearSalary () {
    return this.salary * 12;
    }
}
class Meneger extends Employee {
    constructor (name, salary, fromDepartment) {
        super(name, salary);
        this.fromDepartment = fromDepartment;
        
    }
    
    calcYearSalary() {
     const baseSalary = super.calcYearSalary();
     const bonus = baseSalary * 0.2;
     return baseSalary + bonus;
    }
}

let Meneger1 = new Employee ("Valentin", 39000);
let Meneger2 = new Meneger ("Dimon", 90000);

console.log(Meneger1.calcYearSalary());
console.log(Meneger2.calcYearSalary());