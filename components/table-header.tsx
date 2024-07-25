import { TableHeaderProps } from "./props/TableHeaderProps";
import { TableHead, TableHeader, TableRow } from "./ui/table";

export const CustomTableHeader = (props: TableHeaderProps) => {
  return (
    <TableHeader>
      <TableRow>
        {props.headers.map((header, index) => {
          return <TableHead key={index}>{header}</TableHead>;
        })}
      </TableRow>
    </TableHeader>
  );
};
