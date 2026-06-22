interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: Props) {

  return (
    <input
      className="border p-2 rounded w-full"
      placeholder="Search colleges..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}