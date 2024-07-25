import { MultiSelectInputProps } from "@/components/props/MultiSelectInputProps";
import { TableCell } from "../table";
import MultipleSelector from "../multiple-selector";

export const MultiSelectInput = (props: MultiSelectInputProps) => {
  return (
    <>
      {props.name && (
        <TableCell className="font-medium">{props.name}</TableCell>
      )}
      <TableCell>
        <MultipleSelector
          hidePlaceholderWhenSelected
          hideClearAllButton
          placeholder={props.placeholder}
          options={props.options}
          value={props.selected}
          onChange={(v) => {
            console.log(v);
            props.change(v);
          }}
          emptyIndicator={<p>No results found.</p>}
          disabled={props.disabled}
          aria-label={`Input for ${props.name}`}
        />
      </TableCell>
    </>
  );
};
