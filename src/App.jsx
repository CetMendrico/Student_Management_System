import { useState } from 'react';
import './App.css';
import FilterStudentTable from './components/FilterStudentTable';
import StudentTable from './components/StudentTable';
import SearchBar from './components/SearchBar';

const students = [
  { id: 1, lastName: "Doe", firstName: "John", course: "IT", birthdate: "2000-01-01", age: 24 },
  { id: 2, lastName: "Smith", firstName: "Jane", course: "IS", birthdate: "1999-05-15", age: 25 },
  { id: 3, lastName: "Johnson", firstName: "Chris", course: "CS", birthdate: "2001-09-20", age: 23 },
  { id: 4, lastName: "Williams", firstName: "Sara", course: "DS", birthdate: "2002-12-30", age: 21 },
];

const headers = ["IT Students", "IS Students", "CS Students", "DS Students"];

function App() {
  const [query, setQuery] = useState("");
  const [courseFilter, setCourseFilter] = useState(""); 
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState(""); 

  const filteredStudents = students.filter((student) => {
    const matchesQuery = 
      student.lastName.toLowerCase().includes(query.toLowerCase()) ||
      student.firstName.toLowerCase().includes(query.toLowerCase()) ||
      student.course.toLowerCase().includes(query.toLowerCase()) ||
      student.age.toString().includes(query); 
      
    const matchesCourse = 
      courseFilter === "" || student.course === courseFilter;

    const matchesMinDate = minDate === "" || new Date(student.birthdate) >= new Date(minDate);
    const matchesMaxDate = maxDate === "" || new Date(student.birthdate) <= new Date(maxDate);
    
    return matchesQuery && matchesCourse && matchesMinDate && matchesMaxDate;
  });

  return (
    <FilterStudentTable>
      <SearchBar 
        query={query} 
        setQuery={setQuery} 
        courseFilter={courseFilter}
        setCourseFilter={setCourseFilter} 
        minDate={minDate} 
        setMinDate={setMinDate} 
        maxDate={maxDate} 
        setMaxDate={setMaxDate} 
      />
      <StudentTable headers={headers} students={filteredStudents} />
    </FilterStudentTable>
  );
}

export default App;