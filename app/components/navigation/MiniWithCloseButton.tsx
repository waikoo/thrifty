import MiniCross from "@/app/components/products/MiniCross";

type MiniWithCloseButtonProps = {
  children: React.ReactNode
  Title: ({ className }: { className?: string }) => JSX.Element
  onClose: () => void
}

export default function MiniWithCloseButton({ children, Title, onClose }: MiniWithCloseButtonProps) {

  return (
    <div className="inset-0 min-h-dvh">
      <div className="p-10 bg-t_mustard text-t_black py-3 flex justify-between items-center">
        <Title />
        <MiniCross onClose={onClose} />

      </div>

      {children}

    </div>
  )
}

