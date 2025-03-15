type ActionButtonProps = {
  icon: React.ReactNode;
  label: string;
  action?(): void;
};

function ActionButton({ icon, label, action }: ActionButtonProps) {
  return (
    <button className="max-sm:w-full space-y-2 cursor-pointer" onClick={action}>
      <div className="flex flex-col items-center gap-2 bg-light-blue rounded-2xl lg:rounded-full px-8 py-4 lg:p-4 box-content">
        {icon}

        <p className="sm:hidden uppercase text-xs tracking-wider">{label}</p>
      </div>

      <p className="max-sm:hidden uppercase text-xs tracking-wider">{label}</p>
    </button>
  );
}

export default ActionButton;
