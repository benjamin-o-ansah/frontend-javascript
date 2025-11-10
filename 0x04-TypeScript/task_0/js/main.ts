
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles",
};

const student3: Student = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 19,
  location: "Chicago",
};

const studentsList: Student[] = [student1, student2,student3];

const renderTable = (students: Student[]): void => {
  // 1. Create a container element (table)
  const table = document.createElement('table');
  table.style.borderCollapse = 'collapse'; // Basic styling for table

  // 2. Create the table head for headers
  const thead = document.createElement('thead');
  const headerRow = thead.insertRow();

  // Helper function to create table headers
  const createHeader = (text: string): void => {
    const th = document.createElement('th');
    th.textContent = text;
    th.style.border = '1px solid black';
    th.style.padding = '8px';
    th.style.textAlign = 'left';
    headerRow.appendChild(th);
  };

  createHeader('First Name');
  createHeader('Location');
  table.appendChild(thead);

  // 3. Create the table body for student data
  const tbody = document.createElement('tbody');

  // 4. Iterate over the array and append a new row for each student
  students.forEach((student: Student) => {
    const row = tbody.insertRow();

    // Helper function to create table data cells
    const createCell = (text: string): void => {
      const td = row.insertCell();
      td.textContent = text;
      td.style.border = '1px solid black';
      td.style.padding = '8px';
    };

    // Append First Name and Location cells
    createCell(student.firstName);
    createCell(student.location);
  });

  // 5. Append the body to the table
  table.appendChild(tbody);

  // 6. Append the table to the document body
  document.body.appendChild(table);
};

// 7. Execute the rendering function once the DOM is ready
// This is important to ensure document.body exists.
document.addEventListener('DOMContentLoaded', () => {
  renderTable(studentsList);
});