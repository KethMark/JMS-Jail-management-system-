import Inmate_JMS from "../components/jms/inmate/Inmate";
import { columnsInmate } from "../components/jms/inmate/columns";
import { ContentLayout } from "../components/jms/content-layout";
import { DataTable } from "../components/jms/inmate/data-table";
import { inmateGET } from "../lib/api";
import { useQuery } from "@tanstack/react-query";

const Inmates = () => {
  
  const { data: status, isLoading } = useQuery({
    queryKey: ["Inmate"],
    queryFn: inmateGET
  })

  return (
    <>
      <ContentLayout title="Inmates" />
      <div className="container py-6 space-y-2">
        <Inmate_JMS />
        {isLoading ? (
          <div>Loading....</div>
        ) : (
          status && <DataTable columns={columnsInmate} data={status} />
        )}
      </div>
    </>
  );
}

export default Inmates;
