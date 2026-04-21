import IntroCard from "./components/intro-card";
import StorySection from "./components/story-section";
import ValuesGrid from "./components/values-grid";
import VisitContact from "./components/endnote";
import HistorySection from "./components/history-section";

export default function AboutPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 md:px-6 py-10 space-y-8">
      <IntroCard />
      <StorySection />
      <HistorySection />
      <ValuesGrid />
      <VisitContact />
    </section>
  );
}
