import Visitors_JMS from "../components/jms/visitors/Visitors";
import { columnsVisitors } from "../components/jms/visitors/columns";
import { ContentLayout } from "../components/jms/content-layout";
import { DataTable } from "../components/jms/visitors/data-table";
import { Visitor } from "../routes/query";

const Visitors = () => {
  
  const { status, isLoading  } = Visitor()

  return (
    <div>
      <ContentLayout title="Visitors" />
      <div className="container py-6 space-y-2">
        <Visitors_JMS />
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          status && <DataTable columns={columnsVisitors} data={status} />
        )}
      </div>
    </div>
  );
};

export default Visitors;
