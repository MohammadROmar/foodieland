import DecorationImages from './decoration-images';

export default function Subscribe() {
  return (
    <section className="max-container relative z-0 flex flex-col justify-center items-center rounded-3xl bg-light-blue p-8 overflow-hidden text-center">
      <h2 className="font-semibold text-4xl">Deliciousness to your inbox</h2>

      <p className="max-w-md text-sm m-4 text-black/50">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
        mollitia dignissimos! Voluptatibus aliquam, placeat reprehenderit.
      </p>

      <div className="bg-white rounded-2xl p-1 text-xs mt-4">
        <input placeholder="Your email address..." className="px-4" />
        <button className="bg-black text-white px-8 py-4 rounded-[inherit]">
          Subscribe
        </button>
      </div>

      <DecorationImages />
    </section>
  );
}
