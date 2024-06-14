import { useEffect, useState } from "react";
import Visitors_JMS from "../components/admin/admin_pages/Visitors";
import { Visitor, columnsVisitors } from "../components/admin/admin_pages/table/columns_visi";
import { DataTable } from "../components/admin/admin_pages/table/data-table_visi";
import { ContentLayout } from "../components/admin/content-layout";

async function getData(): Promise<Visitor[]> {
    
    return [
      {
        id: "728ed52f",
        fullname: "User",
        relation: "Cousin",
        visitDate: "6/12/2024",
        visitTime: "12.24 pm",
        duration: "2hrs",
        status: true
      },
      {
        id: "728ed52f",
        fullname: "Example",
        relation: "Cousin",
        visitDate: "6/12/2024",
        visitTime: "12.24 pm",
        duration: "2hrs",
        status: true
      },
      {
        id: "728ed52f",
        fullname: "Example",
        relation: "Cousin",
        visitDate: "6/12/2024",
        visitTime: "12.24 pm",
        duration: "2hrs",
        status: true
      },
      {
        id: "728ed52f",
        fullname: "Example",
        relation: "Cousin",
        visitDate: "6/12/2024",
        visitTime: "12.24 pm",
        duration: "2hrs",
        status: true
      },
      {
        id: "728ed52f",
        fullname: "Example",
        relation: "Cousin",
        visitDate: "6/12/2024",
        visitTime: "12.24 pm",
        duration: "2hrs",
        status: true
      },
      {
        id: "728ed52f",
        fullname: "Example",
        relation: "Cousin",
        visitDate: "6/12/2024",
        visitTime: "12.24 pm",
        duration: "2hrs",
        status: true
      },
      {
        id: "728ed52f",
        fullname: "Example",
        relation: "Cousin",
        visitDate: "6/12/2024",
        visitTime: "12.24 pm",
        duration: "2hrs",
        status: true
      },
      // ...
    ]
  }

const Visitors =  () => {

  const [data, setData] = useState<Visitor[]>([]);
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
    <div>
      <ContentLayout title="Visitors"/>
      <div className="container py-4 space-y-4">
        <Visitors_JMS/>
        <DataTable columns={columnsVisitors} data={data}/>
      </div>
    </div>
  )
}

export default Visitors