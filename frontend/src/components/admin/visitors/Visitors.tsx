import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Button } from "../../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { Pencil1Icon } from "@radix-ui/react-icons";

const Visitors_JMS = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-end">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Pencil1Icon />
              Appointment
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle>Create Appointment</DialogTitle>
            </DialogHeader>
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="grid gap-4">
                <Label>First Name</Label>
                <Input placeholder="First Name" required />
              </div>
              <div className="grid gap-4">
                <Label>Last Name</Label>
                <Input placeholder="Last Name" required />
              </div>
              <div className="grid gap-4">
                <Label>Relation to Inmate</Label>
                <Input placeholder="Cousin" required />
              </div>
              <div className="grid gap-4">
                <Label>Visit Date</Label>
                <Input placeholder="example: 6/11/24" required />
              </div>
              <div className="grid gap-4">
                <Label>Visit Time</Label>
                <Input placeholder="example: 5:10 pm" required />
              </div>
              <div className="grid gap-4">
                <Label>Duration</Label>
                <Input placeholder="2hrs" required />
              </div>
            </div>
            <DialogFooter>
              <Button>Submit</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Visitors_JMS;
