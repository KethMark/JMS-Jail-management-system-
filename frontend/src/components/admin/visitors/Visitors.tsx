import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { visitorSchema } from "../../../lib/formschema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { visitorPOST } from "../../../lib/api";
import { toast } from "sonner";
import { Visitors } from "../../../lib/type";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../../ui/form";

const Visitors_JMS = () => {
  const queryClient = useQueryClient()
  const form = useForm<z.infer<typeof visitorSchema>>({
    resolver: zodResolver(visitorSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      relationship: '',
      visitdate: '',
      visitTime: '',
      duration: ''
    }
  })

  const mutation = useMutation({
    mutationFn: visitorPOST,
    onSuccess: () => {
      toast.success("Congratulations", {
        description: "successfully create the data"
      })
      form.reset()
      queryClient.invalidateQueries({queryKey: ["visitor"]})
    },
    onError: () => {
      toast.error("Their's something wrong", {
        description: "check you network connection"
      })
    },
    retry: 5
  })

  const onSubmit = (data: Visitors) => {
    mutation.mutate(data)
  }

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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="grid lg:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({field}) => (
                    <FormItem>
                      <FormControl>
                        <div className="grid gap-4">
                          <FormLabel>First Name</FormLabel>
                          <Input placeholder="First Name" {...field}/>
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({field}) => (
                    <FormItem>
                      <FormControl>
                        <div className="grid gap-4">
                          <FormLabel>Last Name</FormLabel>
                          <Input placeholder="Last Name" {...field}/>
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="relationship"
                  render={({field}) => (
                    <FormItem>
                      <FormControl>
                        <div className="grid gap-4">
                          <FormLabel>Relationship</FormLabel>
                          <Input placeholder="Relationship" {...field}/>
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="visitdate"
                  render={({field}) => (
                    <FormItem>
                      <FormControl>
                        <div className="grid gap-4">
                          <FormLabel>Visit Date</FormLabel>
                          <Input placeholder="Visit Date" {...field}/>
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="visitTime"
                  render={({field}) => (
                    <FormItem>
                      <FormControl>
                        <div className="grid gap-4">
                          <FormLabel>Visit Time</FormLabel>
                          <Input placeholder="Visit Time" {...field}/>
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="duration"
                  render={({field}) => (
                    <FormItem>
                      <FormControl>
                        <div className="grid gap-4">
                          <FormLabel>Duration</FormLabel>
                          <Input placeholder="Duration" {...field}/>
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button
                  disabled={mutation.isPending}
                  className="mt-8"
                >
                  Submit
                </Button>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Visitors_JMS;
