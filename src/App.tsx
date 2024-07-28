import React, { useState } from 'react';
import DropdownSelect from './DropdownSelect';
import DataTable from './DataTable';
import { Container} from '@mui/material';
import './App.scss';

interface Person {
  SheetUploaded: string;
  UploadedBy: number;
  DateAndTime: number;
}

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
  { value: 'option5', label: 'Option 5' },
  { value: 'option6', label: 'Option 6' },
  { value: 'option7', label: 'Option 7' },
  { value: 'option8', label: 'Option 8' },
  { value: 'option9', label: 'Option 9' },
  { value: 'consolidate', label: 'Consolidate' },

];

const data: { [key: string]: Person[] } = {
  option1: [
    { SheetUploaded: '', UploadedBy: 0, DateAndTime: 0 },
  ],
  option2: [
    { SheetUploaded: '', UploadedBy: 0, DateAndTime: 0 },
  ],
  option3: [
    { SheetUploaded: '', UploadedBy: 0, DateAndTime: 0 },
  ],
  option4: [
    { SheetUploaded: '', UploadedBy: 0, DateAndTime: 0 },
  ],
  option5: [
    { SheetUploaded: '', UploadedBy: 0, DateAndTime: 0 },
  ],
  option6: [
    { SheetUploaded: '', UploadedBy: 0, DateAndTime: 0 },
  ],
  option7: [
    { SheetUploaded: '', UploadedBy: 0, DateAndTime: 0 },
  ],
  option8: [
    { SheetUploaded: '', UploadedBy: 0, DateAndTime: 0 },
  ],
  option9: [
    { SheetUploaded: '', UploadedBy: 0, DateAndTime: 0 },
  ],
  consolidate: [
    { SheetUploaded: '', UploadedBy: 0, DateAndTime: 0 },
  ],
};

const App: React.FC = () => {
  const [tableData, setTableData] = useState<Person[]>([]);

  const handleSelect = (value: string) => {
    setTableData(data[value] || []);
  };

  return (
    <Container>
    <DropdownSelect options={options} onSelect={handleSelect} />
    {tableData.length > 0 && <DataTable data={tableData} />}
  </Container>
  );
};

export default App;
