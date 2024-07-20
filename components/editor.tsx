"use client"
import { EditorProps } from "./props/EditorProps";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";



export const Editor = (props: EditorProps) => {

  return (
    <div>
      <Table>
        <TableCaption>{props.fileName}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Value</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Bind Address</TableCell>
            <TableCell>{props.config.bindAddress}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Bind Port</TableCell>
            <TableCell>{props.config.bindPort}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Public Address</TableCell>
            <TableCell>{props.config.publicAddress}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Public Port</TableCell>
            <TableCell>{props.config.publicPort}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">A2S</TableCell>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Address</TableCell>
                  <TableCell>{props.config.a2s?.address}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Port</TableCell>
                  <TableCell>{props.config.a2s?.port}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableRow>
        </TableBody>
      </Table>
    </div>

  );
}
