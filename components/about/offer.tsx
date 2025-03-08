import OfferCard from './offer-card';
import { whatWeOffer } from '@/data/what-we-offer';

export default function Offer() {
  return (
    <section>
      <h2 className="title text-center mb-8">What We Offer</h2>

      <ul className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
        {whatWeOffer.map((offer) => (
          <OfferCard key={offer.title} {...offer} />
        ))}
      </ul>
    </section>
  );
}
