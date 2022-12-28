interface IProps {
  text: string;
}

export default function ErrorMessage({ text }: IProps) {
  return <div className="mt-1 text-sm text-red">{text}</div>;
}
