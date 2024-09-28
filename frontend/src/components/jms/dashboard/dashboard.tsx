import {
  CardTitle,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "../../ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { Users } from "lucide-react";
import { FrameIcon } from "@radix-ui/react-icons";
import { useQuery } from "@tanstack/react-query";
import { visitorGET } from "../../../lib/api";

const Dashboard_JMS = () => {

  const { data: status } = useQuery({
    queryKey: ["Visitor"],
    queryFn: visitorGET
  })

  return (
    <div className="container space-y-4 py-4">
      <div className=" grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Inmate</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold"></div>
            <p className="text-xs text-muted-foreground">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cell</CardTitle>
            <FrameIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-muted-foreground">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">User</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-muted-foreground">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Officers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-muted-foreground">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader className="px-7">
          <CardTitle>Appointment</CardTitle>
          <CardDescription>List of all appointment below.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Full Name</TableHead>
                <TableHead className="hidden sm:table-cell">Relation</TableHead>
                <TableHead className="hidden sm:table-cell">Visit Date</TableHead>
                <TableHead className="hidden md:table-cell">Visit Time</TableHead>
                <TableHead className="">Duration</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {status?.map((status) => (
                <TableRow key={status.id}>
                  <TableCell>{status.fullname}</TableCell>
                  <TableCell className="hidden sm:table-cell">{status.relationship}</TableCell>
                  <TableCell className="hidden sm:table-cell">{status.visitdate}</TableCell>
                  <TableCell className="hidden md:table-cell">{status.visitTime}</TableCell>
                  <TableCell className="sm:table-cell">{status.duration}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard_JMS;
