import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { inmateSchema } from "../../../lib/formschema";
import { z } from "zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { inmatePOST } from "../../../lib/api";
import { toast } from "sonner"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../ui/form";
import { Inmates } from "../../../lib/type";

const Inmate_JMS = () => {
  const queryClient = useQueryClient()
  const form = useForm<z.infer<typeof inmateSchema>>({
    resolver: zodResolver(inmateSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      age: "",
      gender: "",
      height: "",
      bodyMarks: "",
      crime: "",
      sentenceStartDate: "",
      sentenceEndDate: "",
      cellNumber: "",
    },
  });

  const mutation = useMutation({
    mutationFn: inmatePOST,
    onSuccess: () => {
      toast.success("Congratulations", {
        description: "successfully create the data"
      })
      form.reset()
      queryClient.invalidateQueries({queryKey: ["inmate"]})
    }, 
    onError: () => {
      toast.error("Their's something wrong", {
        description: "check your network connection"
      })
    },
    retry: 5
  });

  const onSubmit = (data: Inmates) => {
    mutation.mutate(data);
  };

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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className=" grid lg:grid-cols-2 gap-4">
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
                      <FormMessage/>
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
                      <FormMessage/>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dateOfBirth"
                  render={({field}) => (
                    <FormItem>
                      <FormControl>
                        <div className="grid gap-4">
                          <FormLabel>Date of Birth</FormLabel>
                          <Input placeholder="Date of Birth" {...field}/>
                        </div>
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="age"
                  render={({field}) => (
                    <FormItem>
                      <FormControl>
                        <div className="grid gap-4">
                          <FormLabel>Age</FormLabel>
                          <Input placeholder="Age" {...field}/>
                        </div>
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gender"
                  render={({field}) => (
                    <FormItem>
                      <FormControl>
                        <div className="grid gap-4">
                          <FormLabel>Gender</FormLabel>
                          <Input placeholder="Gender" {...field}/>
                        </div>
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="height"
                  render={({field}) => (
                    <FormItem>
                      <FormControl>
                        <div className="grid gap-4">
                          <FormLabel>Height</FormLabel>
                          <Input placeholder="Height" {...field}/>
                        </div>
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="bodyMarks"
                  render={({field}) => (
                    <FormItem>
                      <FormControl>
                        <div className="grid gap-4">
                          <FormLabel>Body Marks</FormLabel>
                          <Input placeholder="Body Marks" {...field}/>
                        </div>
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="crime"
                  render={({field}) => (
                    <FormItem>
                      <FormControl>
                        <div className="grid gap-4">
                          <FormLabel>Case</FormLabel>
                          <Input placeholder="Case" {...field}/>
                        </div>
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="sentenceStartDate"
                  render={({field}) => (
                    <FormItem>
                      <FormControl>
                        <div className="grid gap-4">
                          <FormLabel>Sentence Start</FormLabel>
                          <Input placeholder="Sentence Start" {...field}/>
                        </div>
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="sentenceEndDate"
                  render={({field}) => (
                    <FormItem>
                      <FormControl>
                        <div className="grid gap-4">
                          <FormLabel>Sentence End</FormLabel>
                          <Input placeholder="Sentence End" {...field}/>
                        </div>
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cellNumber"
                  render={({field}) => (
                    <FormItem>
                      <FormControl>
                        <div className="grid gap-4">
                          <FormLabel>Cell Number</FormLabel>
                          <Input placeholder="Cell Number" {...field}/>
                        </div>
                      </FormControl>
                      <FormMessage/>
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

export default Inmate_JMS;