
export interface Inmate  {
  id?: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  age: string;
  gender: string;
  height: string;
  bodyMarks: string;
  crime: string;
  sentenceStartDate: string;
  sentenceEndDate: string;
  cellNumber: string;
};

export type Visitors = {
  id?: number; 
  firstName: string
  lastName: string
  relationship: string
  visitDate: string
  visitTime: string
  duration: string
}