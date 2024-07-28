// src/DropdownSelect.tsx
import React, { FC, useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';

interface DropdownSelectProps {
  options: { value: string; label: string }[];
  onSelect: (value: string) => void;
}

const DropdownSelect: FC<DropdownSelectProps> = ({ options, onSelect }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    setSelectedValue(value);
    onSelect(value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel shrink={selectedValue !== ''}>Select</InputLabel><br />
      <Select value={selectedValue} onChange={handleChange}>
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropdownSelect;
