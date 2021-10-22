// ? Toggles visibility of a node
const toggleVisibility = (node) => {
  node.classList.toggle('hidden');
};

// ? Creates a single employee node, which is a card style div with text and a delete button.
const createEmployeeNode = (parent, name, officeNum, phoneNum) => {
  const node = document.createElement('li');
  node.classList.add('employee-card');
  node.setAttribute('id', `employee-${name}`);

  const b = document.createElement('button');
  b.setAttribute('id', name);
  b.classList.add('remove-employee');
  b.innerHTML = 'X';

  b.addEventListener('click', () => {
    removeEmployee(name);
  });

  const p1 = document.createElement('p');
  p1.classList.add('employee-detail');
  p1.innerText = name;
  const p2 = document.createElement('p');
  p2.classList.add('employee-detail');
  p2.innerText = officeNum;
  const p3 = document.createElement('p');
  p3.classList.add('employee-detail');
  p3.innerText = phoneNum;

  node.appendChild(b);
  node.appendChild(p1);
  node.appendChild(p2);
  node.appendChild(p3);
  parent.appendChild(node);
};

// ? Used in the new employee form, this checks whether the employee already exists and alerts the user if so
const addEmployee = (parent, name, officeNum, phoneNum) => {
  const foundEmployee = employeeList.find((employee) => {
    employee.name === name;
  });
  if (!foundEmployee) {
    createEmployeeNode(parent, name, officeNum, phoneNum);
    employeeList.push({ name: name, officeNum: office, phoneNum: phone });
  } else {
    alert('Employee data found');
  }

  // window.scrollTo(0, document.body.scrollHeight);
};

// ? This checks the list for an existing employee by name, and returns yes or no
const verifyEmployee = (name) => {
  const foundEmployee = employeeList.find((employee) => {
    return name === employee.name;
  });
  if (foundEmployee) return 'yes';
  if (!foundEmployee) return 'no';
};

// ? This verifies the name is a match, and if so, updates the office number and phone number
const updateEmployee = (name, officeNum, phoneNum) => {
  employeeList.find((employee, idx) => {
    if (employee.name === name) {
      employeeList[idx] = { name, officeNum, phoneNum };
    }
  });
  // ? I'm rerendering the whole list by removing all of the child nodes, and calling the create method on each new employee in the list
  rerender();
};

// ? Splices the employee out of the list, wanted to use destructive to only need to maintain one. Better practice would be to generate a new one, but seemed overkill for this instance
const removeEmployee = (employeeName) => {
  let employeeIndex;
  employeeList.forEach((e, i) => {
    if (e.name === employeeName) employeeIndex = i;
    return null;
  });
  const nodeToRemove = document.querySelector(`#employee-${employeeName}`);
  if (employeeIndex >= 0) nodeToRemove.remove();
  return employeeList.splice(employeeIndex, 1);
};

// ? used in rerender, this removes all children from a parent node
const removeAllEmployees = (parent) => {
  while (parent.firstChild) parent.removeChild(parent.firstChild);
};

// ? removes all existing children and regenerates
const rerender = () => {
  removeAllEmployees(employees);
  employeeList.map((employee) => {
    createEmployeeNode(employees, employee.name, employee.officeNum, employee.phoneNum);
  });
};
