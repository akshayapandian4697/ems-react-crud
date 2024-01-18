function EmployeeSearch() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Employee Search"));
}
function EmployeeTable({
  allEmployees
}) {
  const allEmployeeRows = allEmployees.map(employee => /*#__PURE__*/React.createElement(EmployeeRow, {
    employee: employee
  }));
  return /*#__PURE__*/React.createElement("div", {
    class: "table-wrapper"
  }, /*#__PURE__*/React.createElement("h2", null, "Employee Directory"), /*#__PURE__*/React.createElement("table", {
    class: "fl-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, " FIRST NAME "), /*#__PURE__*/React.createElement("th", null, " LAST NAME "), /*#__PURE__*/React.createElement("th", null, " AGE "), /*#__PURE__*/React.createElement("th", null, " DATE OF JOINING "), /*#__PURE__*/React.createElement("th", null, " TITLE "), /*#__PURE__*/React.createElement("th", null, " DEPARTMENT "), /*#__PURE__*/React.createElement("th", null, " EMPLOYEE TYPE"), /*#__PURE__*/React.createElement("th", null, " CURRENT STATUS "))), /*#__PURE__*/React.createElement("tbody", null, allEmployeeRows)));
}
function EmployeeRow({
  employee
}) {
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, " ", employee.firstName, " "), /*#__PURE__*/React.createElement("td", null, " ", employee.lastName, " "), /*#__PURE__*/React.createElement("td", null, " ", employee.age, " "), /*#__PURE__*/React.createElement("td", null, " ", new Date(parseInt(employee.dateOfJoining)).toLocaleDateString(), " "), /*#__PURE__*/React.createElement("td", null, " ", employee.title, " "), /*#__PURE__*/React.createElement("td", null, " ", employee.department, " "), /*#__PURE__*/React.createElement("td", null, " ", employee.employeeType, " "), /*#__PURE__*/React.createElement("td", null, " ", Number(employee.currentStatus), " "));
}
function EmployeeCreate({
  AddSingleEmployee
}) {
  const [errorMsg, setErrorMsg] = React.useState([]);
  const handleSubmit = async e => {
    e.preventDefault();
    let form = document.forms.addEmployee;
    console.log(form);
    const singleEmployee = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      age: parseInt(form.age.value),
      dateOfJoining: form.dateOfJoining.value,
      title: form.title.value,
      department: form.department.value,
      employeeType: form.employeeType.value,
      currentStatus: true
    };
    if (form.firstName.value.length < 3) {
      setErrorMsg("Employee First Name should be atleast 3 characters long");
    }
    if (form.lastName.value.length < 3) {
      setErrorMsg("Employee Last Name should be atleast 3 characters long");
    }
    if (parseInt(form.age.value) < 20 || parseInt(form.age.value) > 70) {
      setErrorMsg("Employee Age should be between 20 and 70");
    }
    console.log(singleEmployee);
    document.getElementById("addEmployee").reset();
    await AddSingleEmployee(singleEmployee);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Add New Employee"), /*#__PURE__*/React.createElement("form", {
    name: "addEmployee",
    id: "addEmployee",
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("label", {
    for: "firstName"
  }, "First Name:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "firstName",
    name: "firstName",
    placeholder: "Enter the First Name",
    pattern: "[A-Za-z ]{3,30}",
    title: "First Name should be atleast 3 chars long",
    required: true
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    for: "lastName"
  }, "Last Name:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "lastName",
    name: "lastName",
    placeholder: "Enter the Last Name",
    pattern: "[A-Za-z ]{3,30}",
    title: "Last Name should be atleast 3 chars long",
    required: true
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    for: "age"
  }, "Age:"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    id: "age",
    name: "age",
    placeholder: "Enter the age",
    min: "20",
    max: "70",
    required: true
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    for: "dateOfJoining"
  }, "Date of Joining:"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    id: "dateOfJoining",
    name: "dateOfJoining",
    placeholder: "Enter the Date of Joining",
    required: true
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    for: "title"
  }, "Title:"), /*#__PURE__*/React.createElement("select", {
    name: "title",
    id: "title",
    required: true
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    hidden: true
  }, "Select the Title"), /*#__PURE__*/React.createElement("option", {
    value: "Employee"
  }, "Employee"), /*#__PURE__*/React.createElement("option", {
    value: "Manager"
  }, "Manager"), /*#__PURE__*/React.createElement("option", {
    value: "Director"
  }, "Director"), /*#__PURE__*/React.createElement("option", {
    value: "VP"
  }, "VP")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    for: "department"
  }, "Department:"), /*#__PURE__*/React.createElement("select", {
    name: "department",
    id: "department",
    required: true
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    hidden: true
  }, "Select the Department"), /*#__PURE__*/React.createElement("option", {
    value: "IT"
  }, "IT"), /*#__PURE__*/React.createElement("option", {
    value: "Marketing"
  }, "Marketing"), /*#__PURE__*/React.createElement("option", {
    value: "HR"
  }, "HR"), /*#__PURE__*/React.createElement("option", {
    value: "Engineering"
  }, "Engineering")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    for: "employeeType"
  }, "Employee Type:"), /*#__PURE__*/React.createElement("select", {
    name: "employeeType",
    id: "employeeType",
    required: true
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    hidden: true
  }, "Select the Employee Type"), /*#__PURE__*/React.createElement("option", {
    value: "Full Time"
  }, "Full Time"), /*#__PURE__*/React.createElement("option", {
    value: "Part Time"
  }, "Part Time"), /*#__PURE__*/React.createElement("option", {
    value: "Contract"
  }, "Contract"), /*#__PURE__*/React.createElement("option", {
    value: "Seasonal"
  }, "Seasonal")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Submit")), /*#__PURE__*/React.createElement("h4", null, errorMsg));
}
const EmployeeDirectory = () => {
  const [allEmployees, setAllEmployees] = React.useState([]);
  let query = `
        query {
            employeeList {
            firstName
            lastName
            age
            dateOfJoining
            title
            department
            employeeType
            currentStatus
            }
        }
    `;
  function fetchEmployeeData() {
    fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query
      })
    }).then(async response => {
      let tempEmployees = await response.json();
      let tempList = tempEmployees.data.employeeList;
      console.log(tempEmployees);
      setAllEmployees(tempList);
      let error = await response.error();
      setErrorMsg(error);
    });
  }
  React.useEffect(function () {
    fetchEmployeeData();
  }, []);
  const AddSingleEmployee = singleEmployee => {
    let query = `
            mutation AddNewEmployeeToDB($firstName: String!, $lastName: String!, $title: String!, $department: String!, $employeeType: String!, $age: Int, $dateOfJoining: String!) {
                addNewEmployeeToDB(firstName: $firstName, lastName: $lastName, title: $title, department: $department, employeeType: $employeeType, age: $age, dateOfJoining: $dateOfJoining) {
                firstName
                lastName
                age
                dateOfJoining
                title
                department
                employeeType
                currentStatus
                }
            }
        `;
    fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query,
        variables: {
          firstName: singleEmployee.firstName,
          lastName: singleEmployee.lastName,
          age: singleEmployee.age,
          dateOfJoining: singleEmployee.dateOfJoining,
          title: singleEmployee.title,
          department: singleEmployee.department,
          employeeType: singleEmployee.employeeType
        }
      })
    }).then(async response => {
      const temp = response.json();
      console.log(temp);
      fetchEmployeeData();
    });
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    class: "grid-container"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EmployeeTable, {
    allEmployees: allEmployees
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EmployeeCreate, {
    AddSingleEmployee: AddSingleEmployee
  }))));
};
const element = ReactDOM.createRoot(document.getElementById("root-1"));
element.render( /*#__PURE__*/React.createElement(EmployeeDirectory, null));