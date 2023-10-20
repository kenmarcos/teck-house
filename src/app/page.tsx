import { Button } from "@/components/ui/button";
import { SpeakerIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-2 md:px-0">
      <section className="mt-7">
        <Image
          src="/banner-home-01_desktop.png"
          alt="Até 55% de desconto esse mês!"
          width={0}
          height={0}
          className="hidden h-auto w-full md:inline"
          sizes="100vw"
          priority
        />

        <Image
          src="/banner-home-01.png"
          alt="Até 55% de desconto esse mês!"
          width={0}
          height={0}
          className="h-auto w-full md:hidden"
          sizes="100vw"
          priority
        />
      </section>

      <section className="mt-7 md:px-5 lg:px-10">
        <ul className="grid grid-cols-2 gap-x-4 gap-y-2 md:grid-cols-3 lg:grid-cols-6">
          <li>
            <Button asChild variant="outline" className="w-full gap-2">
              <Link href="/">
                <SpeakerIcon size={16} />
                <span>Fones</span>
              </Link>
            </Button>
          </li>

          <li>
            <Button asChild variant="outline" className="w-full gap-2">
              <Link href="/">
                <SpeakerIcon size={16} />
                <span>Fones</span>
              </Link>
            </Button>
          </li>

          <li>
            <Button asChild variant="outline" className="w-full gap-2">
              <Link href="/">
                <SpeakerIcon size={16} />
                <span>Fones</span>
              </Link>
            </Button>
          </li>

          <li>
            <Button asChild variant="outline" className="w-full gap-2">
              <Link href="/">
                <SpeakerIcon size={16} />
                <span>Teclados</span>
              </Link>
            </Button>
          </li>

          <li>
            <Button asChild variant="outline" className="w-full gap-2">
              <Link href="/">
                <SpeakerIcon size={16} />
                <span>Fones</span>
              </Link>
            </Button>
          </li>

          <li>
            <Button asChild variant="outline" className="w-full gap-2">
              <Link href="/">
                <SpeakerIcon size={16} />
                <span>Mousepads</span>
              </Link>
            </Button>
          </li>
        </ul>
      </section>
    </div>
  );
}
