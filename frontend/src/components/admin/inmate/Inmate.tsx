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

const Inmate_JMS = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-end">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Pencil1Icon />
              Inmate
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px] lg:max-w-[800px]">
            <DialogHeader>
              <DialogTitle>Add Inmate</DialogTitle>
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
                <Label>Date of Birth</Label>
                <Input placeholder="Cousin" required />
              </div>
              <div className="grid gap-4">
                <Label>Age</Label>
                <Input placeholder="example: 6/11/24" required />
              </div>
              <div className="grid gap-4">
                <Label>Gender</Label>
                <Input placeholder="example: 5:10 pm" required />
              </div>
              <div className="grid gap-4">
                <Label>Height</Label>
                <Input placeholder="2hrs" required />
              </div>
              <div className="grid gap-4">
                <Label>Body Marks</Label>
                <Input placeholder="2hrs" required />
              </div>
              <div className="grid gap-4">
                <Label>Case</Label>
                <Input placeholder="2hrs" required />
              </div>
              <div className="grid gap-4">
                <Label>Sentence Start</Label>
                <Input placeholder="2hrs" required />
              </div>
              <div className="grid gap-4">
                <Label>Sentence End</Label>
                <Input placeholder="2hrs" required />
              </div>
              <div className="grid gap-4">
                <Label>Cell Number</Label>
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

export default Inmate_JMS;
