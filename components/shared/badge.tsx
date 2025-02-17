interface BadgeProps {
  title: string;
}

const Badge = ({ title }: BadgeProps) => {
  return (
    <div className="bg-zinc-300 w-fit py-1.5 px-3 text-xs rounded-full">
      {title}
    </div>
  );
};

export { Badge };
