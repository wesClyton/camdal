

export function DR(props: { children: React.ReactNode; block?: boolean }) {
  const { children, block } = props;
  return (
    <span className={`text-c-orange ${block ? "block" : ""}`}>
      { children }
    </span>
  )
}
