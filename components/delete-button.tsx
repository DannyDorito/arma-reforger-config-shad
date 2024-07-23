import { DeleteButtonProps } from "./props/DeleteButtonProps"
import { Button } from "./ui/button"
import { CrossCircledIcon } from "@radix-ui/react-icons"

export const DeleteButton = (props: DeleteButtonProps) => {

  return (
    <Button variant="outline" size="icon" onClick={() => props.click}>
      <CrossCircledIcon className="h-[1.2rem] w-[1.2rem]"/>
      <span className="sr-only">Delete Admin</span>
    </Button>
  )
}
