import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/primitives/input"
 
export function InputWithButton({
  buttonTitle,
  placeholder,
  onClick
}: {
  buttonTitle?: string
  placeholder?: string
  onClick?: () => void
}) {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="text" placeholder={placeholder} />
      <Button onClick={onClick} type="submit" className="w-auto">{buttonTitle}</Button>
    </div>
  )
}
