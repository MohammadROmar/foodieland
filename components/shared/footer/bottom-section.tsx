import SocialmediaLinks from '../socialmedia-links';
import Copyright from './copyright';

export default function FooterBottomSection() {
  return (
    <div className="relative my-4">
      <div className="absolute right-0 max-md:hidden">
        <SocialmediaLinks />
      </div>

      <Copyright />
    </div>
  );
}
