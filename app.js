// Your work here
const employees = document.querySelector('#employee-list');
// ? This function toggles visibility of the main view, which gets hidden when rendering search results
document.querySelector('#view-employees').addEventListener('click', () => {
  toggleVisibility(employees);
});

// ? This one toggles the visibility of the new employee form
document.querySelector('#add-employee').addEventListener('click', () => {
  const newForm = document.querySelector('#new-employee-form');
  toggleVisibility(newForm);
});

// ? This one toggles the visibility of the verify employee form
document.querySelector('#verify-employee').addEventListener('click', () => {
  const verifyForm = document.querySelector('#verify-employee-form');
  const results = document.querySelector('#search-results');
  toggleVisibility(verifyForm);
  toggleVisibility(results);
});

// ? This one toggles the visibility of the update employee form
document.querySelector('#update-employee').addEventListener('click', () => {
  const updateForm = document.querySelector('#update-employee-form');
  toggleVisibility(updateForm);
});

// ? This one creates an employee node for each employee on the list
employeeList.map((employee) => {
  createEmployeeNode(employees, employee.name, employee.officeNum, employee.phoneNum);
});

// ? overrides default behavior of the form, and instead adds an employee to the list and creates a new node at the end
const submitNewEmployeeForm = (e) => {
  if (e.preventDefault) e.preventDefault();
  const name = document.querySelector('#name');
  const office = document.querySelector('#office');
  const phone = document.querySelector('#phone');
  addEmployee(employees, name.value, office.value, phone.value);

  name.value = null;
  office.value = null;
  phone.value = null;

  return false;
};

// ? equivalent of previous, but for updating. Calls updateEmployee which runs rerender
const submitUpdateEmployeeForm = (e) => {
  if (e.preventDefault) e.preventDefault();
  const name = document.querySelector('#update-name');
  const office = document.querySelector('#update-office');
  const phone = document.querySelector('#update-phone');

  updateEmployee(name.value, office.value, phone.value);

  name.value = null;
  office.value = null;
  phone.value = null;

  return false;
};

// ? equivalent of above, for verification. hides employees and displays yes or no if found
const submitVerifyEmployeeForm = (e) => {
  if (e.preventDefault) e.preventDefault();
  const verifyName = document.querySelector('#verify-name');

  const text = verifyEmployee(verifyName.value);

  const results = document.querySelector('#search-results');
  const empList = document.querySelector('#employee-list');
  results.innerText = text;
  toggleVisibility(empList);
  toggleVisibility(results);

  verifyName.value = null;

  return false;
};

// ? sets up the handlers for all of the forms
const newEmployeeForm = document.querySelector('#new-employee-form');
if (newEmployeeForm.attachEvent) newEmployeeForm.attachEvent('submit', submitNewEmployeeForm);
if (!newEmployeeForm.attachEvent) newEmployeeForm.addEventListener('submit', submitNewEmployeeForm);

const verifyEmployeeForm = document.querySelector('#verify-employee-form');
if (verifyEmployeeForm.attachEvent) verifyEmployeeForm.attachEvent('submit', submitVerifyEmployeeForm);
if (!verifyEmployeeForm.attachEvent) verifyEmployeeForm.addEventListener('submit', submitVerifyEmployeeForm);

const updateEmployeeForm = document.querySelector('#update-employee-form');
if (updateEmployeeForm.attachEvent) updateEmployeeForm.attachEvent('submit', submitUpdateEmployeeForm);
if (!updateEmployeeForm.attachEvent) updateEmployeeForm.addEventListener('submit', submitUpdateEmployeeForm);
