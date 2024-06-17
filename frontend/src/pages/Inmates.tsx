import { useEffect, useState } from "react";
import Inmate_JMS from "../components/admin/inmate/Inmate";
import { Inmate, columnsInmate } from "../components/admin/inmate/columns";
import { ContentLayout } from "../components/admin/content-layout";
import { DataTable } from "../components/admin/inmate/data-table";

async function getData(): Promise<Inmate[]> {
  return [
    {
      id: "728ed52f",
      fullname: "User",
      dateofbirth: " ",
      age: " ",
      gender: "Male",
      height: " ",
      bodymarks: " ",
      case: "Robbery",
      sentenceStartDate: " ",
      sentenceEndDate: " ",
      cellNumber: "1",
    },
    {
      id: "728ed52f",
      fullname: "Example",
      dateofbirth: " ",
      age: " ",
      gender: "Female",
      height: " ",
      bodymarks: " ",
      case: "Robbery",
      sentenceStartDate: " ",
      sentenceEndDate: " ",
      cellNumber: "2",
    },
    {
      id: "728ed52f",
      fullname: "Example",
      dateofbirth: " ",
      age: " ",
      gender: "Male",
      height: " ",
      bodymarks: " ",
      case: "Robbery",
      sentenceStartDate: " ",
      sentenceEndDate: " ",
      cellNumber: "1",
    },
    {
      id: "728ed52f",
      fullname: "Example",
      dateofbirth: " ",
      age: " ",
      gender: "Female",
      height: " ",
      bodymarks: " ",
      case: "Robbery",
      sentenceStartDate: " ",
      sentenceEndDate: " ",
      cellNumber: "2",
    },
    {
      id: "728ed52f",
      fullname: "Example",
      dateofbirth: " ",
      age: " ",
      gender: "Male",
      height: " ",
      bodymarks: " ",
      case: "Robbery",
      sentenceStartDate: " ",
      sentenceEndDate: " ",
      cellNumber: "1",
    },
    {
      id: "728ed52f",
      fullname: "Example",
      dateofbirth: " ",
      age: " ",
      gender: "Female",
      height: " ",
      bodymarks: " ",
      case: "Robbery",
      sentenceStartDate: " ",
      sentenceEndDate: " ",
      cellNumber: "2",
    },
    {
      id: "728ed52f",
      fullname: "Example",
      dateofbirth: " ",
      age: " ",
      gender: "Male",
      height: " ",
      bodymarks: " ",
      case: "Robbery",
      sentenceStartDate: " ",
      sentenceEndDate: " ",
      cellNumber: "2",
    },
    {
      id: "728ed52f",
      fullname: "Example",
      dateofbirth: " ",
      age: " ",
      gender: "Male",
      height: " ",
      bodymarks: " ",
      case: "Robbery",
      sentenceStartDate: " ",
      sentenceEndDate: " ",
      cellNumber: "2",
    },
    {
      id: "728ed52f",
      fullname: "Example",
      dateofbirth: " ",
      age: " ",
      gender: "Male",
      height: " ",
      bodymarks: " ",
      case: "Robbery",
      sentenceStartDate: " ",
      sentenceEndDate: " ",
      cellNumber: "2",
    },
    // ...
  ];
}

const Inmates = () => {
  const [data, setData] = useState<Inmate[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <ContentLayout title="Inmates" />
      <div className="container py-6 space-y-2">
        <Inmate_JMS />
        <DataTable columns={columnsInmate} data={data} />
      </div>
    </>
  );
};

export default Inmates;
