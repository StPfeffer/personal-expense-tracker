import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Emily Smith",
    userName: "@emily_smith",
    comment: "This app is awesome!"
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Michael Johnson",
    userName: "@michael_j",
    comment:
      "I never realized how much I was overspending each month until I started using this expense tracker."
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Sarah Williams",
    userName: "@sarah_w",
    comment:
      "This app helped me save for my vacation by keeping me mindful of my spending habits."
  },
  {
    image: "https://github.com/shadcn.png",
    name: "David Brown",
    userName: "@david_b",
    comment:
      "I've tried a few expense trackers before, but this one stands out. The interface is user-friendly, and the reports give me a clear overview of where my money is going."
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Lisa Davis",
    userName: "@lisa_d",
    comment:
      "Since using this app, I've been able to cut unnecessary expenses and save more each month. It's made managing my budget so much simpler."
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Tom Harris",
    userName: "@tom_h",
    comment:
      "The best part about this app is how easy it is to use."
  }
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          People Love{" "}
        </span>
        Our Expense Tracker
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        See how our personal expense tracker is helping people manage their
        finances with ease and confidence. Join a community that’s taking control
        of their budgets.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
}
