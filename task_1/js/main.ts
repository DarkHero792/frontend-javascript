interface teacher {
readonly firstName: string,
readonly lastName: string,
fullTimeEmployee: boolean,
yearsOfExperiece?: number,
location: string,
[key:string] : any;
}

//example usage
const teacher3: teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// should print
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"