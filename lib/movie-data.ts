type MovieDataProps = {
  title: string;
  description: string;
};

export const MovieData = ({ title, description }: MovieDataProps) => {
  return {
    title: title,
    description: description,
  };
};
