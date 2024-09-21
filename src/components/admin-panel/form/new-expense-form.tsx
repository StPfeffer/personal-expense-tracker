"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  Expense,
  PaymentMethod,
  paymentMethodsDetails,
  PaymentType,
  paymentTypeDetails,
  TransactionCategory
} from "@/types/transaction";
import { Input } from "@/components/ui/input";
import MoneyInput from "@/components/geral/money-input";
import { Switch } from "@/components/ui/switch";
import { getRandomArbitrary } from "@/lib/utils";
import { DialogClose } from "@/components/ui/dialog";
import { toast } from "sonner";

const formSchema = z.object({
  type: z
    .string({
      required_error: "Please select a type.",
    }),
  paymentMethod: z
    .string({
      required_error: "Please select a payment method.",
    }),
  description: z
    .string({ required_error: "Please enter a description.", })
    .min(10, "Description must contain at least 10 characters."),
  notes: z
    .string()
    .optional(),
  amount: z
    .number()
    .gt(0, "Amount must be greater than 0."),
  recurring: z
    .boolean()
    .default(false)
    .optional()
});

const NewExpenseForm = ({
  _onSubmit,
  closeDialog = true
}: {
  _onSubmit: (expense: Expense) => void,
  closeDialog?: boolean
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
      amount: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const existingExpenses: Expense[] = JSON.parse(localStorage.getItem("transactions") || "[]");

    let lastId = Math.max(...existingExpenses.map(transaction => transaction.id));
    lastId += 1;

    const transaction: Expense = {
      id: lastId,
      description: values.description,
      amount: values.amount,
      date: new Date().toISOString(),
      type: values.type as PaymentType,
      category: "expense" as TransactionCategory,
      paymentMethod: values.paymentMethod as PaymentMethod,
      notes: "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      recurring: values.recurring,
      transactionId: getRandomArbitrary().toString()
    }

    existingExpenses.push(transaction);
    localStorage.setItem("expenses", JSON.stringify(existingExpenses));

    toast.success("Expense has been created.");

    _onSubmit(transaction);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex w-full justify-between space-x-5">
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Type</FormLabel>

                <FormControl>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a type" {...field} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Types</SelectLabel>
                        {paymentTypeDetails.map((c, i) => (
                          <SelectItem key={c.key} value={c.key}>
                            <div className="flex items-center">
                              <c.icon className="w-4 h-4 mr-2" />
                              {c.label}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Description</FormLabel>

              <FormControl>
                <Input {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex w-full justify-between space-x-5">
          <MoneyInput
            form={form}
            label="Amount"
            name="amount"
          />

          <FormField
            control={form.control}
            name="paymentMethod"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Payment Method</FormLabel>

                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a method" {...field} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Categories</SelectLabel>
                        {Object.entries(paymentMethodsDetails).map(([key, details]) => (
                          <SelectItem key={key} value={key}>
                            <div className="flex items-center">
                              <details.icon className="w-4 h-4 mr-2" />
                              {details.label}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="recurring"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">
                  Recurring
                </FormLabel>
                <FormDescription>
                  Specify if this expense occurs on a regular basis.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="flex justify-end">
          {closeDialog &&
            <DialogClose asChild>
              <Button type="submit">Create</Button>
            </DialogClose>
          }
          {!closeDialog &&
            <Button type="submit">Create</Button>
          }
        </div>
      </form>
    </Form >
  )
}

export default NewExpenseForm;
