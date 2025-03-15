import HeroImagesSection from './images-section';
import HeroTextSection from './text-section';

export default function Hero() {
  return (
    <section id="#hero" className="my-20 h-full">
      <div className="h-full flex max-lg:flex-col bg-light-blue rounded-3xl relative overflow-hidden">
        <HeroTextSection />

        <HeroImagesSection />
      </div>
    </section>
  );
}
