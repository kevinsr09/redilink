interface Props {
  children: React.ReactNode
  className?: string
  as?: string
}
export const Container = ({ children, as, className }: Props): JSX.Element => {
  const containerClass = `${className}`

  switch (as) {
    case 'section':
      return <section className={containerClass}>{children}</section>

    case 'main':
      return <main className={containerClass}>{children}</main>

    case 'footer':
      return <footer className={containerClass}>{children}</footer>

    case 'header':
      return <header className={containerClass}>{children}</header>
    default:
      return <div className={containerClass}>{children}</div>
  }
}
