import { UrlShortenerForm } from "@/components/urls/url-shortener-form";
import TrueFocus from "@/blocks/TextAnimations/TrueFocus/TrueFocus";
import Aurora from "@/blocks/Backgrounds/Aurora/Aurora";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from 'next/link';
import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center min-h-screen p-6 md:p-24">
      {/* Background particles positioned behind everything */}
      <div className="absolute inset-0 -z-10">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={0.3} /* Increased amplitude for more height */
          speed={0.5}
        />
      </div>
      <div className="w-full max-w-3xl mx-auto text-center relative flex flex-col items-center justify-center min-h-[60vh]">
             
      <div className="z-10 flex min-h-24 items-center justify-center">
            <div
              className={cn(
                "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
              )}
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <Link href="https://www.producthunt.com/posts/shrinkai">
                <span>✨ Find Us On Product Hunt</span>
                </Link>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </div>
          </div>
        <TrueFocus 
          sentence=" Shorten Your Links"
          manualMode={false}
          blurAmount={3}
          borderColor="red"
          animationDuration={1}
          pauseBetweenAnimations={1}
          glowColor={'rgba(0, 255, 0, 1)'}
        />
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Paste your long URL and get a shortened one. It's free and easy to
          use.
        </p>
        <UrlShortenerForm />
      </div>
    </div>
  );
}
