import { socialmediaLinks } from '@/data/socialmedia-links';

export default function SocialmediaLinks() {
  return (
    <ul className="flex items-centers gap-6">
      {socialmediaLinks.map(
        ({ label, icon: Icon, to }) =>
          Icon && (
            <li key={label}>
              <a href={to} target="_blank" rel="noopener noreferrer">
                <Icon />
              </a>
            </li>
          )
      )}
    </ul>
  );
}
