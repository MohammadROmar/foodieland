import Input from '../ui/input';

export default function ContactForm() {
  return (
    <form className="grid items-baseline grid-cols-2 gap-4 last:col-start-1 last:col-end-3">
      <Input label="name" type="text" placeholder="Enter your name..." />
      <Input label="email address" placeholder="Your email address..." />
      <Input label="subject" placeholder="Enter subject..." />
      <Input label="enquiry type" placeholder="Enter enquiry type..." />

      <Input
        as="textarea"
        label="messages"
        placeholder="Enter your messages..."
        className="h-60"
      />
    </form>
  );
}
