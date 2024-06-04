import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const Register = async () => {
  return (
    <Card className="mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border border-[#121212]dark:bg-black">
      <CardHeader>
        <CardTitle>Welcome to MyShop</CardTitle>
        <CardDescription>
          Please provide all the necessary information.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="first_name">First Name</Label>
            <Input
              id="first_name"
              placeholder="Rochmad"
              type="text"
              name="first_name"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="last_name">Last Name</Label>
            <Input
              id="last_name"
              placeholder="Fahmi"
              type="text"
              name="last_name"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="rochmad@mail.com"
              type="email"
              name="email"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="******"
              name="password"
            />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col">
        <Button type="button" className="w-full">
          Sign up &rarr;
        </Button>

        <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-sm mt-2">
          Already have an account?
          <Link
            href={"/login"}
            className="ml-1 text-neutral-900 dark:text-neutral-100 hover:text-opacity-80"
          >
            Login
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default Register;
