import InstagramPosts from './posts';

export default function Instagram() {
  return (
    <section className="space-y-6 pb-8 flex flex-col items-center relative before:absolute before:w-screen before:-z-10 before:top-0 before:bottom-0 before:bg-gradient-to-t before:from-light-blue before:to-transparent">
      <h2 className="font-semibold text-4xl text-center">
        Check out @foodieland on Instagram
      </h2>
      <p className="max-w-2xl text-sm text-black/60 text-center pb-6">
        Get your daily dose of mouthwatering recipes! Follow us on Instagram for
        quick cooking tips, delicious meal ideas, and behind-the-scenes kitchen
        magic. Swipe, save, and start cooking!
      </p>

      <InstagramPosts />
    </section>
  );
}
