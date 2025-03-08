import Button from '../../ui/button';
import DecorationImages from './decoration-images';

export default function Subscribe() {
  return (
    <section className="relative z-0 flex flex-col justify-center items-center rounded-3xl bg-light-blue p-8 overflow-hidden text-center">
      <h2 className="title">Deliciousness to your inbox</h2>

      <p className="max-w-md text-sm m-4 text-black/50">
        Get the best recipes, cooking tips, and exclusive treats delivered
        straight to your inbox. Subscribe and make every meal unforgettable!
      </p>

      <div className="flex bg-white rounded-2xl p-1 text-xs mt-4">
        <input
          type="email"
          placeholder="Your email address..."
          className="px-4 focus:outline-none"
        />
        <Button text="Subscribe" />
      </div>

      <DecorationImages />
    </section>
  );
}
