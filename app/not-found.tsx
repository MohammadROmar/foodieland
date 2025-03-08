import NotFound from '@/components/not-found/404';
import Button from '@/components/ui/button';

export default function PageNotFound() {
  return (
    <section className="flex flex-col items-center pt-4 text-center">
      <NotFound />

      <p className="text-xl font-medium pb-8">
        Oops! the page you're looking for is not on the menu.
      </p>

      <Button as="a" href="/" text="Back To Home" className="w-fit" />
    </section>
  );
}
