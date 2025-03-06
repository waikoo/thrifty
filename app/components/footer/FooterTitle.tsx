type FooterTitleProps = {
  children: React.ReactNode
}

export default function FooterTitle({ children }: FooterTitleProps) {
  return (
    <h3 className="footerTitles text-t_mustard">{children}</h3>
  )
}

