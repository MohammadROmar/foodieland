type ActionButtonProps = {
  icon: React.ReactNode;
  label: string;
  action?(): void;
};

function ActionButton({ icon, label, action }: ActionButtonProps) {
  return (
    <button className="space-y-2" onClick={action}>
      <div className="bg-light-blue rounded-full p-4 box-content">{icon}</div>

      <p className="uppercase text-xs tracking-wider">{label}</p>
    </button>
  );
}

export default ActionButton;
