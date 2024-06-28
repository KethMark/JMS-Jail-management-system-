import Visitors_JMS from "../components/admin/visitors/Visitors";
import {
  columnsVisitors,
} from "../components/admin/visitors/columns";
import { ContentLayout } from "../components/admin/content-layout";
import { DataTable } from "../components/admin/visitors/data-table";
import { useQuery } from "@tanstack/react-query";
import { visitorGET } from "../lib/api";


const Visitors = () => {

  const { data: status, isLoading } = useQuery({
    queryKey: ["visitor"],
    queryFn: visitorGET
  })

  return (
    <div>
      <ContentLayout title="Visitors" />
      <div className="container py-6 space-y-2">
        <Visitors_JMS />
        {isLoading? (
          <div>Loading...</div>
        ): (
          status && (
            <DataTable columns={columnsVisitors} data={status} />
          )
        )}
      </div>
    </div>
  );
};

export default Visitors;