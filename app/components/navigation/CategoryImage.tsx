type CategoryImageProps = {
  children: string
}

export default function CategoryImage({ children }: CategoryImageProps) {
  return (
    <div className="w-max-full relative grid cursor-pointer place-items-center">
      <span className="textShadow absolute text-xl">{children}</span>
      <img src="https://picsum.photos/300/200" />
    </div>
  )
}
