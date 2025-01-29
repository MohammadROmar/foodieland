import DeliciousRecipiesHeading from './heading';
import DeliciousRecipies from './recipes';

export default function DeliciousRecipiesSection() {
  return (
    <section className="space-y-8">
      <DeliciousRecipiesHeading />

      <DeliciousRecipies />
    </section>
  );
}
