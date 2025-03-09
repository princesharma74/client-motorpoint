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
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const formSchema = z.object({
  bookingType: z.string().min(1, "Please select a booking type."),
  selectedVanType: z.string().min(1, "Please select a package."),
  name: z.string().min(1, "Name is required."),
  email: z.string().email("Invalid email address."),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits."),
  pickupDate: z.string().min(1, "Pickup date is required."),
  returnDate: z.string().min(1, "Return date is required."),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export const HeroBookingForm = () => {
  const [message, setMessage] = useState("");
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bookingType: "",
      selectedVanType: "",
      name: "",
      email: "",
      phoneNumber: "",
      pickupDate: "",
      returnDate: "",
      message: "",
    },
  });

  async function onSubmit(userDetails: FormData) {
    setMessage("Loading...");
    try {
      const response = await axios.post("/api/book", userDetails);

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
        console.error(
          "Error submitting contact form:",
          error.response?.data || error.message
        );
      } else if (error instanceof Error) {
        console.error("Error submitting contact form:", error.message);
      } else {
        console.error("Unexpected error:", error);
      }
    }
  }

  return (
    <Form {...form}>
      <h2 className="text-3xl font-bold mb-4">Book Your Van Now!</h2>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="bookingType"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <RadioGroup
                  value={field.value}
                  onValueChange={field.onChange}
                  className="flex"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Short Term Booking" id="short-term" />
                    <Label htmlFor="short-term">Short Term Booking</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Long Term Booking" id="long-term" />
                    <Label htmlFor="long-term">Long Term Booking</Label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
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
                <Input placeholder="example@email.com" {...field} />
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
                <Input placeholder="1234567890" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex space-x-4">
          <FormField
            control={form.control}
            name="pickupDate"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Pickup Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="returnDate"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Return Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Your message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Dialog>
          <DialogTrigger asChild className="cursor">
            <Button type="submit" className="w-full py-2 px-4 cursor">
            Book Now
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
  );
};
