import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import cat from "@/components/ui/memecat.jpg";
import { Button } from "./ui/button";
const MainPage = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>MEOW</CardTitle>
          <CardDescription>This is a meme cat card</CardDescription>
        </CardHeader>
        <CardContent>
          <Image src={cat} alt="MEOW" className="rounded-xl" />
        </CardContent>
        <CardFooter>
          <Button>Nothing!</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default MainPage;
