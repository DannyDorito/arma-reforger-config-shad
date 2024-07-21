"use client"
import { EditorProps } from "./props/EditorProps";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";



export const Editor = (props: EditorProps) => {

  return (
    <div className="min-w-min">
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
          <TableRow>
            <TableCell className="font-medium">Rcon</TableCell>
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
                  <TableCell>{props.config.rcon?.address}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Port</TableCell>
                  <TableCell>{props.config.rcon?.port}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Password</TableCell>
                  <TableCell>{props.config.rcon?.password}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Permission</TableCell>
                  <TableCell>{props.config.rcon?.permission}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Game</TableCell>
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
                  <TableCell className="font-medium">Name</TableCell>
                  <TableCell>{props.config.game?.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Password</TableCell>
                  <TableCell>{props.config.game?.password}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Password Admin</TableCell>
                  <TableCell>{props.config.game?.passwordAdmin}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Admins</TableCell>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Value</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {props.config.game?.admins.map((admin, key) => {
                        return (
                          <TableRow key={key}>
                            <TableCell>{admin}</TableCell>
                          </TableRow>
                        )
                      })}
                    </TableBody>
                  </Table>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Scenario ID</TableCell>
                  <TableCell>{props.config.game?.scenarioId}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Max Players</TableCell>
                  <TableCell>{props.config.game?.maxPlayers}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Visible</TableCell>
                  <TableCell>{props.config.game?.visible}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Cross Platform</TableCell>
                  <TableCell>{props.config.game?.maxPlayers}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableRow>
        </TableBody>

      </Table>
    </div>

  );
}
