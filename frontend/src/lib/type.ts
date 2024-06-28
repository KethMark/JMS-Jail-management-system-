// export type Inmate = {
//   id?: number;
//   firstName: string;
//   lastName:string;
//   dateOfBirth: string;
//   age: string;
//   gender: string;
//   height: string;
//   bodyMarks: string;
//   crime: string;
//   sentenceStartDate: string;
//   sentenceEndDate: string;
//   cellNumber: string;
//   fullname: string
// };

export type Inmates = {
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
  fullname?: string
};

export type Visitors = {
  id?: number; 
  firstName: string
  lastName: string
  fullname?: string
  relationship: string
  visitdate: string
  visitTime: string
  duration: string
}