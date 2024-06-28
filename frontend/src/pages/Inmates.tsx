import { useQuery } from "@tanstack/react-query";
import Inmate_JMS from "../components/admin/inmate/Inmate";
import { columnsInmate } from "../components/admin/inmate/columns";
import { ContentLayout } from "../components/admin/content-layout";
import { DataTable } from "../components/admin/inmate/data-table";
import { inmateGET } from "../lib/api";

const Inmates = () => {

  const { data: status, isLoading } = useQuery({
    queryKey: ["inmate"],
    queryFn: inmateGET
  })

  return (
    <>
      <ContentLayout title="Inmates" />
      <div className="container py-6 space-y-2">
        <Inmate_JMS />
        {isLoading? (
          <div>Loading....</div>
        ) : (
          status && (
            <DataTable columns={columnsInmate} data={status} />
          )
        )}
      </div>
    </>
  );
};

export default Inmates;
