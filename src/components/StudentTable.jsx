import React from 'react';
import Table from './Table';
import StudentItem from './students/StudentItem';
import StudentCategoryHeader from './students/StudentCategoryHeader';

const StudentTable = ({ headers, students, formatDate }) => {
  const itStudents = students.filter(student => student.course === 'IT');
  const isStudents = students.filter(student => student.course === 'IS');
  const csStudents = students.filter(student => student.course === 'CS');
  const dsStudents = students.filter(student => student.course === 'DS');

  return (
    <div>
      <Table.TableContainer>
        <Table.THead>
          <Table.Row>
            <Table.ColumnHeader>Last Name</Table.ColumnHeader>
            <Table.ColumnHeader>First Name</Table.ColumnHeader>
            <Table.ColumnHeader>Course</Table.ColumnHeader>
            <Table.ColumnHeader>Birthdate</Table.ColumnHeader>
            <Table.ColumnHeader>Age</Table.ColumnHeader>
          </Table.Row>
        </Table.THead>
        <Table.TBody>
          {itStudents.length > 0 && <StudentCategoryHeader text={headers[0]} />}
          {itStudents.map(student => (
            <StudentItem key={student.id} {...student} formatDate={formatDate} />
          ))}

          {isStudents.length > 0 && <StudentCategoryHeader text={headers[1]} />}
          {isStudents.map(student => (
            <StudentItem key={student.id} {...student} formatDate={formatDate} />
          ))}

          {csStudents.length > 0 && <StudentCategoryHeader text={headers[2]} />}
          {csStudents.map(student => (
            <StudentItem key={student.id} {...student} formatDate={formatDate} />
          ))}

          {dsStudents.length > 0 && <StudentCategoryHeader text={headers[3]} />}
          {dsStudents.map(student => (
            <StudentItem key={student.id} {...student} formatDate={formatDate} />
          ))}
        </Table.TBody>
      </Table.TableContainer>
    </div>
  );
};

export default StudentTable;