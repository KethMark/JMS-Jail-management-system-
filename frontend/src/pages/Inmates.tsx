import { useEffect, useState } from "react";
import Inmate_JMS from "../components/admin/admin_pages/Inmate";
import { Inmate, columnsInmate } from "../components/admin/admin_pages/table/columns_inm";
import { ContentLayout } from "../components/admin/content-layout";
import { DataTable } from "../components/admin/admin_pages/table/data-table_inm";

async function getData(): Promise<Inmate[]> {
    
  return [
    {
      id: "728ed52f",
      fullname: "User",
      dateofbirth: " ",
      age: " ",
      gender: " Male ",
      height: " ",
      bodymarks: " ",
      case: " ",
      sentenceStartDate: " ",
      sentenceEndDate: " ",
      cellNumber: " "
    },
    {
      id: "728ed52f",
      fullname: "Example",
      dateofbirth: " ",
      age: " ",
      gender: " Female ",
      height: " ",
      bodymarks: " ",
      case: " ",
      sentenceStartDate: " ",
      sentenceEndDate: " ",
      cellNumber: " "
    },
    {
      id: "728ed52f",
      fullname: "Example",
      dateofbirth: " ",
      age: " ",
      gender: " Male ",
      height: " ",
      bodymarks: " ",
      case: " ",
      sentenceStartDate: " ",
      sentenceEndDate: " ",
      cellNumber: " "
    },
    {
      id: "728ed52f",
      fullname: "Example",
      dateofbirth: " ",
      age: " ",
      gender: " Female ",
      height: " ",
      bodymarks: " ",
      case: " ",
      sentenceStartDate: " ",
      sentenceEndDate: " ",
      cellNumber: " "
    },
    {
      id: "728ed52f",
      fullname: "Example",
      dateofbirth: " ",
      age: " ",
      gender: " Male ",
      height: " ",
      bodymarks: " ",
      case: " ",
      sentenceStartDate: " ",
      sentenceEndDate: " ",
      cellNumber: " "
    },
    {
      id: "728ed52f",
      fullname: "Example",
      dateofbirth: " ",
      age: " ",
      gender: " Female ",
      height: " ",
      bodymarks: " ",
      case: " ",
      sentenceStartDate: " ",
      sentenceEndDate: " ",
      cellNumber: " "
    },
    {
      id: "728ed52f",
      fullname: "Example",
      dateofbirth: " ",
      age: " ",
      gender: " Male ",
      height: " ",
      bodymarks: " ",
      case: " ",
      sentenceStartDate: " ",
      sentenceEndDate: " ",
      cellNumber: " "
    },
    // ...
  ]
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
      <ContentLayout title="Inmates"/>
      <div className="container py-4 space-y-4">
        <Inmate_JMS/>
        <DataTable columns={columnsInmate} data={data}/>
      </div>
    </>
  )
};

export default Inmates;
