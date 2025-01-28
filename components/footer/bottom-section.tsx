import SocialmediaLinks from '../shared/socialmedia-links';
import Copyright from './copyright';

export default function FooterBottomSection() {
  return (
    <div className="relative my-4">
      <div className="absolute right-0">
        <SocialmediaLinks />
      </div>

      <Copyright />
    </div>
  );
}
