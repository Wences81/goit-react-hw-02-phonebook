import React from 'react';
import { Label, Input } from '../Filter/Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <Label>
        Find contacts by name
        <Input type="text" value={value} onChange={onChange}></Input>
      </Label>
    </div>
  );
};

export default Filter;
