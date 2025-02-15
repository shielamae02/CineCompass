import { Feature } from "@/types/feature";

const FeatureCard = ({ title, description }: Feature) => {
  return (
    <div className="bg-zinc-900/50 border border-zinc-700/50 text-white w-7/12 rounded-xl p-8 text-center space-y-2">
      <p className="text-2xl font-medium">{title}</p>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default FeatureCard;
