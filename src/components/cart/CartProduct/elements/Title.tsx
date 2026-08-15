type TitleProps = {
    text: string
}

const Title = ({ text }: TitleProps) => {
  return (
    <h2 className="text-lg text-slate-800 line-clamp-2">
      <strong>{text}</strong>
    </h2>
  );
};

export default Title;
