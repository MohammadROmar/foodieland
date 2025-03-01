import HeroImagesSection from './images-section';
import HeroTextSection from './text-section';

export default function Hero() {
  return (
    <section id="#hero" className="my-20 flex items-center h-full">
      <div className="h-full flex bg-light-blue rounded-3xl relative overflow-hidden">
        <HeroTextSection />

        <HeroImagesSection />
      </div>
    </section>
  );
}
