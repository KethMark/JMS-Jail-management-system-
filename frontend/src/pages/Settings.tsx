import { Link } from "react-router-dom";
import { ContentLayout } from "../components/admin/content-layout";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

const Settings = () => {
  return (
    <>
      <ContentLayout title="Settings">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                <BreadcrumbEllipsis className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/dashboard">Dashboard</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/user">Users</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/inmates">Inmates</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/visitors">Visitors</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Settings</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </ContentLayout>
      Settings side par
    </>
  );
};

export default Settings;
