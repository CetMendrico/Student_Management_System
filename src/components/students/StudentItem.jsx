import React from 'react';
import Table from '../Table';

const StudentItem = (props) => {
  const { lastName, firstName, course, birthdate, age, formatDate } = props;

  return (
    <Table.Row>
      <Table.Column>{lastName}</Table.Column>
      <Table.Column>{firstName}</Table.Column>
      <Table.Column>{course}</Table.Column>
      <Table.Column>{formatDate(birthdate)}</Table.Column>
      <Table.Column>{age}</Table.Column>
    </Table.Row>
  );
};

export default StudentItem;