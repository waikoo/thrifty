type FooterTitleProps = {
  children: React.ReactNode
}

export default function FooterTitle({ children }: FooterTitleProps) {
  return (
    <h3 className="footerTitles">{children}</h3>
  )
}

