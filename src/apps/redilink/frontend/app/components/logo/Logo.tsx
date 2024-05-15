interface Props{
  className?: string
}
export const Logo = ({ className }: Props ) => {
  return <div className={`text-3xl ${className}`}>
    Redilink
  </div>;
}