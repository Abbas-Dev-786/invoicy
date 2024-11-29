import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-6 justify-center h-[80vh] text-center max-w-5xl mx-auto">
      <h1 className="text-7xl font-bold">Invoicy</h1>
      <p>
        <Button asChild size="lg" className="text-md">
          <Link href="/dashboard">Sign In</Link>
        </Button>
      </p>
    </main>
  );
}
