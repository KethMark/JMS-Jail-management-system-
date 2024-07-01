import { useEffect, useState } from "react";
import { Users, columnsUser } from "../components/jms/user/columns_user";
import { ContentLayout } from "../components/jms/content-layout";
import { DataTable } from "../components/jms/user/data-table";

async function getData(): Promise<Users[]> {
  return [
    {
      id: "728ed52f",
      Username: "Example",
      role: "Guest",
      refreshToken: " ",
      token: " ",
      createdAt: " ",
      createBy: " ",
    },
    {
      id: "728ed52f",
      Username: "Example",
      role: "Guest",
      refreshToken: " ",
      token: " ",
      createdAt: " ",
      createBy: " ",
    },
    {
      id: "728ed52f",
      Username: "Example",
      role: "Guest",
      refreshToken: " ",
      token: " ",
      createdAt: " ",
      createBy: " ",
    },
    {
      id: "728ed52f",
      Username: "Example",
      role: "Guest",
      refreshToken: " ",
      token: " ",
      createdAt: " ",
      createBy: " ",
    },
    {
      id: "728ed52f",
      Username: "Example",
      role: "Guest",
      refreshToken: " ",
      token: " ",
      createdAt: " ",
      createBy: " ",
    },
    {
      id: "728ed52f",
      Username: "Example",
      role: "Guest",
      refreshToken: " ",
      token: " ",
      createdAt: " ",
      createBy: " ",
    },
    {
      id: "728ed52f",
      Username: "Example",
      role: "Guest",
      refreshToken: " ",
      token: " ",
      createdAt: " ",
      createBy: " ",
    },
    {
      id: "728ed52f",
      Username: "Example",
      role: "Guest",
      refreshToken: " ",
      token: " ",
      createdAt: " ",
      createBy: " ",
    },
    {
      id: "728ed52f",
      Username: "Example",
      role: "Guest",
      refreshToken: " ",
      token: " ",
      createdAt: " ",
      createBy: " ",
    },
    {
      id: "728ed52f",
      Username: "Example",
      role: "Guest",
      refreshToken: " ",
      token: " ",
      createdAt: " ",
      createBy: " ",
    },
    {
      id: "728ed52f",
      Username: "Example",
      role: "Guest",
      refreshToken: " ",
      token: " ",
      createdAt: " ",
      createBy: " ",
    },
    {
      id: "728ed52f",
      Username: "Example",
      role: "Guest",
      refreshToken: " ",
      token: " ",
      createdAt: " ",
      createBy: " ",
    },
    {
      id: "728ed52f",
      Username: "Example",
      role: "Guest",
      refreshToken: " ",
      token: " ",
      createdAt: " ",
      createBy: " ",
    },
    // ...
  ];
}

const User = () => {
  const [data, setData] = useState<Users[]>([]);
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
      <ContentLayout title="User" />
      <div className="container mt-12 py-6">
        <DataTable columns={columnsUser} data={data} />
      </div>
    </div>
  );
};

export default User;
