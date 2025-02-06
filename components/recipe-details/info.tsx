type RecipeInfoProps = {
  icon: React.ElementType;
  label?: string;
  value: string;
};

function RecipeInfo({ icon: Icon, label, value }: RecipeInfoProps) {
  return (
    <div className="flex items-center gap-2 px-8">
      <Icon />
      <div className="text-xs">
        {label && <h2 className="uppercase tracking-wider">{label}</h2>}
        <p className="text-black/60">{value}</p>
      </div>
    </div>
  );
}

export default RecipeInfo;
