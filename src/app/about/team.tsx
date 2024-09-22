import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Linkedin } from "lucide-react";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SocialNetworkProps[];
}

interface SocialNetworkProps {
  name: "Linkedin" | "Facebook" | "Instagram";
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://i.pravatar.cc/150?img=35",
    name: "Emma Smith",
    position: "Product Manager",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/" },
      { name: "Facebook", url: "https://www.facebook.com/" },
      { name: "Instagram", url: "https://www.instagram.com/" },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=60",
    name: "John Doe",
    position: "Tech Lead",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/" },
      { name: "Facebook", url: "https://www.facebook.com/" },
      { name: "Instagram", url: "https://www.instagram.com/" },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=36",
    name: "Ashley Ross",
    position: "Frontend Developer",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/" },
      { name: "Instagram", url: "https://www.instagram.com/" },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=17",
    name: "Bruce Rogers",
    position: "Backend Developer",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/" },
      { name: "Facebook", url: "https://www.facebook.com/" },
    ],
  },
];

const socialIconMap: Record<string, JSX.Element> = {
  Linkedin: <Linkedin size="20" />,
  Facebook: <Facebook size="20" />,
  Instagram: <Instagram size="20" />,
};

export const Team = () => {
  return (
    <section id="team" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Our Dedicated{" "}
        </span>
        Crew
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground text-center">
        Meet the amazing team behind our success.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
        {teamList.map(({ imageUrl, name, position, socialNetworks }: TeamProps) => (
          <Card
            key={name}
            className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center transition-transform transform hover:scale-105 duration-300"
          >
            <CardHeader className="mt-8 flex justify-center items-center pb-2">
              <img
                src={imageUrl}
                alt={`${name} - ${position}`}
                className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover shadow-lg"
              />
              <CardTitle className="text-center">{name}</CardTitle>
              <CardDescription className="text-primary text-center">{position}</CardDescription>
            </CardHeader>

            <CardContent className="text-center pb-2">
              <p>Passionate about making a difference in {position}.</p>
            </CardContent>

            <CardFooter className="flex space-x-4">
              {socialNetworks.length > 0 ? (
                socialNetworks.map(({ name, url }: SocialNetworkProps) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={buttonVariants({ variant: "ghost", size: "sm" })}
                    aria-label={`Follow ${name} on ${name}`}
                  >
                    {socialIconMap[name] || null}
                  </a>
                ))
              ) : (
                <p className="text-muted-foreground">No social networks available</p>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
