<<<<<<< HEAD
import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";
import { AppSidebar } from "../components/app-sidebar";
import File from "../components/File";
import Navbar from "../components/Navbar";
import { Button } from "../components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination";

function FileManagement({ children }) {
  return (
    <div className="flex">
      <SidebarProvider>
        <AppSidebar />

        <main className="w-full">
          {children}
          <Navbar />

          <div className="m-16 grid grid-cols-2 gap-10">
            <File />
            <File />
            <File />
            <File />
            <File />
            <File />
          </div>
          <div className="m-6 flex h-8 w-full justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
=======
export default function FileManagement({ children }) {
  return <div></div>;
>>>>>>> 33e8426b0b8a24f00360282ac0b898a9fb1fd463
}
