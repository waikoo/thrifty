type NumberProps = {
  itemLength: number
}

export default function Number({ itemLength }: NumberProps) {

  return itemLength && itemLength > 0 ? (
    <div className="bg-t_black dark:bg-t_white text-t_white dark:text-t_black absolute -top-[0.85rem] right-[-15px] flex h-[20px] w-[20px] items-center justify-center rounded-full p-[5px] text-center">
      <span className="self-center text-sm">{itemLength > 0 ? itemLength : ''}</span>
    </div>
  ) : null

}
