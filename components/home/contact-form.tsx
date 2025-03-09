import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  selectedVanType: z.string().min(1, "Please select a package."),
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  email: z.string().email("Invalid email address."),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits."),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export const ContactForm = () => {
  const [message, setMessage] = useState("");
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      selectedVanType: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  async function onSubmit(userDetails: FormData) {
    setMessage("Loading...");
    try {
      const response = await axios.post("/api/contact", userDetails);

      if (response.status === 200) {
        setMessage("We will get back to you soon!");
        console.log("Email sent successfully:", response.data);
      } else {
        setMessage("Failed! Please directly email or call.");
        console.error("Failed to send email:", response.data);
      }
    } catch (error: unknown) {
      setMessage("Failed! Please directly email or call.");

      if (axios.isAxiosError(error)) {
        // If the error is from Axios, log the response or message
        console.error(
          "Error submitting contact form:",
          error.response?.data || error.message
        );
      } else if (error instanceof Error) {
        // Handle a standard JavaScript Error
        console.error("Error submitting contact form:", error.message);
      } else {
        // Handle unexpected error types
        console.error("Unexpected error:", error);
      }
    }
  }
  return (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="selectedVanType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Select Van Type</FormLabel>
                      <FormControl>
                        <div className="rounded-md">
                          <select
                            value={field.value}
                            onChange={(e) => field.onChange(e.target.value)}
                            className="p-2 rounded w-full border"
                          >
                            <option value="" disabled>
                              Select a package
                            </option>
                            <option value="Ton 1">
                              Ton 1
                            </option>
                            <option value="Ton 2">
                              Ton 2
                            </option>
                            <option value="Ton 3">
                              Ton 3
                            </option>
                          </select>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Doe"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="example@email.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="1234567890"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Dialog>
                  <DialogTrigger asChild className="cursor">
                    <Button
                      type="submit"
                      className="w-full py-2 px-4 cursor"
                    >
                      Send message
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>{message}</DialogTitle>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </form>
            </Form>
  )
}
