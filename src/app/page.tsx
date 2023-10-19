import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Home() {
  return (
    <div>
      <h1 className="text-red-500">Hello World</h1>

      <ModeToggle />

      <Button variant="secondary">Teste</Button>
      <Button>Teste</Button>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Teste</p>
        </CardContent>
      </Card>
    </div>
  );
}
