import React from 'react';
import Table from '../Table';

const StudentCategoryHeader = ({ text }) => {
  return (
    <Table.Row>
      <Table.ColumnHeader colSpan="5">{text}</Table.ColumnHeader>
    </Table.Row>
  );
};

export default StudentCategoryHeader;