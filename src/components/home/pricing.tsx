import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Free",
    popular: 0,
    price: 0,
    description: "Get started with our Free plan, perfect for individuals or small teams looking to explore our features.",
    buttonText: "Get Started",
    benefitList: [
      "First Month Free",
      "No Credit Card Required",
      "Unlimited Transactions",
      "Community Support",
    ],
  },
  {
    title: "Premium",
    popular: 1,
    price: 5,
    description: "Unlock advanced features with the Premium plan, designed for growing businesses that need more customization.",
    buttonText: "Start Free Trial",
    benefitList: [
      "All Benefits from the Free Plan",
      "Custom Dashboards for Insights",
      "Seamless External Integrations",
      "Priority Support from Our Team",
    ],
  },
  {
    title: "Pro",
    popular: 0,
    price: 15,
    description: "Our Pro plan offers the ultimate experience with enhanced capabilities and support for serious businesses.",
    buttonText: "Contact Us",
    benefitList: [
      "All Benefits from the Premium Plan",
      "AI-Powered Insights for Better Decision Making",
      "Dedicated Account Manager",
      "Enhanced Priority Support",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-16 sm:py-24" >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Get
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Unlimited{" "}
        </span>
        Access
      </h2>

      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
        reiciendis.
      </h3>

      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingList.map((pricing: PricingProps) => (
            <Card
              key={pricing.title}
              className={cn(
                pricing.popular === PopularPlanType.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                  : ""
                , "w-[330px]")}
            >
              <CardHeader>
                <CardTitle className="flex item-center justify-between">
                  {pricing.title}
                  {pricing.popular === PopularPlanType.YES ? (
                    <Badge
                      variant="secondary"
                      className="text-sm text-primary"
                    >
                      Most popular
                    </Badge>
                  ) : null}
                </CardTitle>
                <div>
                  <span className="text-3xl font-bold">${pricing.price}</span>
                  <span className="text-muted-foreground"> /month</span>
                </div>

                <CardDescription>{pricing.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <Button className="w-full">{pricing.buttonText}</Button>
              </CardContent>

              <hr className="w-4/5 m-auto mb-4" />

              <CardFooter className="flex">
                <div className="space-y-4">
                  {pricing.benefitList.map((benefit: string) => (
                    <span
                      key={benefit}
                      className="flex"
                    >
                      <Check className="text-green-500" />{" "}
                      <h3 className="ml-2">{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
