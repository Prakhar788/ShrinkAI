import { UrlShortenerForm } from "@/components/urls/url-shortener-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import TrueFocus from "@/blocks/TextAnimations/TrueFocus/TrueFocus";
import Particles from "@/blocks/Backgrounds/Particles/Particles";
import Aurora from "@/blocks/Backgrounds/Aurora/Aurora";

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
