"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const schema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(50, { message: "Name must not exceed 50 characters" }),
  phone: z
    .string()
    .min(1)
    .regex(/^[0-9]{10}$/, { message: "Phone number must be 10 digits" }),
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(1, { message: "Email is required" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long" })
    .max(500, { message: "Message must not exceed 500 characters" }),
});

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
    setSubmitted(true);
    form.reset();

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-base text-[#2F3033]">Full Name</FormLabel>
                <FormControl>
                  <Input
                    className="rounded-sm border-[#C6C6C9]"
                    {...field}
                    placeholder="Enter your full name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-base text-[#2F3033]">Phone</FormLabel>
                <FormControl>
                  <Input
                    className="rounded-sm border-[#C6C6C9]"
                    {...field}
                    placeholder="Enter your phone number"
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
                <FormLabel className="font-semibold text-base text-[#2F3033]">Email</FormLabel>
                <FormControl>
                  <Input
                    className="rounded-sm border-[#C6C6C9]"
                    {...field}
                    placeholder="Enter your email address"
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
                <FormLabel className="font-semibold text-base text-[#2F3033]">Message</FormLabel>
                <FormControl>
                  <textarea
                    className="rounded-sm border border-[#C6C6C9] p-2 w-full bg-transparent"
                    rows={3} // Set the height of the textarea
                    placeholder="Enter your message"
                    {...field} // Spread field props
                  />
                </FormControl>
                <FormMessage />
                {submitted && (
                  <FormDescription>Submission successful.</FormDescription>
                )}
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full text-base font-semibold py-3 bg-[#013D17]">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
