import eggsImg from '@/assets/images/eggs.png';
import vegetablesImg from '@/assets/images/vegetables.png';

export default function DecorationImages() {
  return (
    <div className="w-full h-1/2 absolute bottom-0 -z-10 flex justify-between ">
      <img src={vegetablesImg.src} alt="Some vegetables." />
      <img src={eggsImg.src} alt="Eggs in a dish with some vegetables." />
    </div>
  );
}
