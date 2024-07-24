"use client";

import { EditorProps } from "./props/EditorProps";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { HelpButton } from "./help-button";
import { EditorInput } from "./ui/custom-input/editor-input";
import { PasswordInput } from "./ui/custom-input/password-input";
import { SwitchInput } from "./ui/custom-input/switch-input";
import { ResetButton } from "./reset-button";
import {
  A2s,
  Config,
  Game,
  GameProperties,
  Operating,
  Platform,
  Rcon,
} from "@/types/Config";
import { Separator } from "./ui/separator";
import { SelectInput } from "./ui/custom-input/select-input";
import { MultiSelectInput } from "./ui/custom-input/multiselect-input";
import { useState } from "react";

export const Editor = (props: EditorProps) => {
  const [opfMods, setOpfMods] = useState<OpfMod | undefined>(undefined);

  const getOpfMods = async () => {
    fetch("https://files.ofpisnotdead.com/reforger-workshop.json")
      .then((response) => response.json())
      .then((data) => {
        const opfData = JSON.parse(JSON.stringify(data));
        setOpfMods(opfData);
      });
  };

  return (
    <>
      <h2 className="scroll-m-20 font-extrabold tracking-tight lg:text-2xl">
        Base
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Value</TableHead>
            <TableHead>Action(s)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <EditorInput
              parameter={props.config.bindAddress}
              name="Bind Address"
              key="bindAddress"
              placeholder="xxx.xxx.xxx.xxx"
              change={(v) =>
                props.setConfig({ ...props.config, bindAddress: v })
              }
            />
            <TableCell className="flex justify-between">
              <ResetButton
                click={() =>
                  props.setConfig({
                    ...props.config,
                    bindAddress: new Config().bindAddress,
                  })
                }
              />
              <HelpButton parameterName="bindAddress" />
            </TableCell>
          </TableRow>
          <TableRow>
            <EditorInput
              parameter={props.config.bindPort}
              min={1}
              max={65535}
              name="Bind Port"
              key="bindPort"
              change={(v) =>
                props.setConfig({ ...props.config, bindPort: parseInt(v) })
              }
            />
            <TableCell className="flex justify-between">
              <ResetButton
                click={() =>
                  props.setConfig({
                    ...props.config,
                    bindPort: new Config().bindPort,
                  })
                }
              />
              <HelpButton parameterName="bindPort" />
            </TableCell>
          </TableRow>
          <TableRow>
            <EditorInput
              parameter={props.config.publicAddress}
              name="Public Address"
              key="publicAddress"
              placeholder="xxx.xxx.xxx.xxx"
              change={(v) =>
                props.setConfig({ ...props.config, publicAddress: v })
              }
            />
            <TableCell className="flex justify-between">
              <ResetButton
                click={() =>
                  props.setConfig({
                    ...props.config,
                    publicAddress: new Config().publicAddress,
                  })
                }
              />
              <HelpButton parameterName="publicAddress" />
            </TableCell>
          </TableRow>
          <TableRow>
            <EditorInput
              parameter={props.config.publicPort}
              min={1}
              max={65535}
              name="Public Port"
              key="publicPort"
              change={(v) =>
                props.setConfig({ ...props.config, publicPort: parseInt(v) })
              }
            />
            <TableCell className="flex justify-between">
              <ResetButton
                click={() =>
                  props.setConfig({
                    ...props.config,
                    publicPort: new Config().publicPort,
                  })
                }
              />
              <HelpButton parameterName="publicPort" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Separator className="my-6" />
      <h2 className="scroll-m-20 font-extrabold tracking-tight lg:text-2xl">
        Operating
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Value</TableHead>
            <TableHead>Action(s)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <SwitchInput
              parameter={props.config.operating?.lobbyPlayerSynchronise}
              name="Lobby Player Synchronise"
              key="operating.lobbyPlayerSynchronise"
              change={(v) =>
                props.setConfig({
                  ...props.config,
                  operating: {
                    ...props.config.operating,
                    lobbyPlayerSynchronise: v,
                  },
                })
              }
            />
            <TableCell className="flex justify-between">
              <ResetButton
                click={() =>
                  props.setConfig({
                    ...props.config,
                    operating: {
                      ...props.config.operating,
                      lobbyPlayerSynchronise: new Operating()
                        .lobbyPlayerSynchronise,
                    },
                  })
                }
              />
              <HelpButton parameterName="lobbyPlayerSynchronise" />
            </TableCell>
          </TableRow>
          <TableRow>
            {typeof props.config.operating?.disableNavmeshStreaming ===
            "boolean" ? (
              <SwitchInput
                parameter={
                  props.config.operating?.disableNavmeshStreaming as boolean
                }
                name="Disable Navmesh Streaming"
                key="operating.disableNavmeshStreaming"
                change={(v) =>
                  props.setConfig({
                    ...props.config,
                    operating: {
                      ...props.config.operating,
                      disableNavmeshStreaming: v,
                    },
                  })
                }
              />
            ) : (
              <EditorInput
                parameter={
                  props.config.operating?.disableNavmeshStreaming as string[]
                }
                name="Disable Navmesh Streaming"
                key="operating.disableNavmeshStreaming"
                change={() => console.log("TODO")}
                //TODO: Input
              />
            )}
            <TableCell className="flex justify-between">
              <ResetButton
                click={() =>
                  props.setConfig({
                    ...props.config,
                    operating: {
                      ...props.config.operating,
                      disableNavmeshStreaming: new Operating()
                        .disableNavmeshStreaming,
                    },
                  })
                }
              />
              <HelpButton parameterName="disableNavmeshStreaming" />
            </TableCell>
          </TableRow>
          <TableRow>
            <SwitchInput
              parameter={props.config.operating?.disableServerShutdown}
              name="Disable Server Shutdown"
              key="operating.disableServerShutdown"
              change={(v) =>
                props.setConfig({
                  ...props.config,
                  operating: {
                    ...props.config.operating,
                    disableServerShutdown: v,
                  },
                })
              }
            />
            <TableCell className="flex justify-between">
              <ResetButton
                click={() =>
                  props.setConfig({
                    ...props.config,
                    operating: {
                      ...props.config.operating,
                      disableServerShutdown: new Operating()
                        .disableServerShutdown,
                    },
                  })
                }
              />
              <HelpButton parameterName="disableServerShutdown" />
            </TableCell>
          </TableRow>
          <TableRow>
            <SwitchInput
              parameter={props.config.operating?.disableAI}
              name="Disable AI"
              key="operating.disableAI"
              change={(v) =>
                props.setConfig({
                  ...props.config,
                  operating: { ...props.config.operating, disableAI: v },
                })
              }
            />
            <TableCell className="flex justify-between">
              <ResetButton
                click={() =>
                  props.setConfig({
                    ...props.config,
                    operating: {
                      ...props.config.operating,
                      disableAI: new Operating().disableAI,
                    },
                  })
                }
              />
              <HelpButton parameterName="disableAI" />
            </TableCell>
          </TableRow>
          <TableRow>
            <EditorInput
              parameter={props.config.operating?.playerSaveTime}
              name="Player Save Time"
              key="operating.playerSaveTime"
              change={(v) =>
                props.setConfig({
                  ...props.config,
                  operating: {
                    ...props.config.operating,
                    playerSaveTime: parseInt(v),
                  },
                })
              }
            />
            <TableCell className="flex justify-between">
              <ResetButton
                click={() =>
                  props.setConfig({
                    ...props.config,
                    operating: {
                      ...props.config.operating,
                      playerSaveTime: new Operating().playerSaveTime,
                    },
                  })
                }
              />
              <HelpButton parameterName="playerSaveTime" />
            </TableCell>
          </TableRow>
          <TableRow>
            <EditorInput
              parameter={props.config.operating?.aiLimit}
              name="AI Limit"
              key="operating.aiLimit"
              min={-1}
              change={(v) =>
                props.setConfig({
                  ...props.config,
                  operating: {
                    ...props.config.operating,
                    aiLimit: parseInt(v),
                  },
                })
              }
            />
            <TableCell className="flex justify-between">
              <ResetButton
                click={() =>
                  props.setConfig({
                    ...props.config,
                    operating: {
                      ...props.config.operating,
                      aiLimit: new Operating().aiLimit,
                    },
                  })
                }
              />
              <HelpButton parameterName="aiLimit" />
            </TableCell>
          </TableRow>
          <TableRow>
            <EditorInput
              parameter={props.config.operating?.slotReservationTimeout}
              min={5}
              max={300}
              name="Slot Reservation Timeout"
              key="operating.slotReservationTimeout"
              change={(v) =>
                props.setConfig({
                  ...props.config,
                  operating: {
                    ...props.config.operating,
                    slotReservationTimeout: parseInt(v),
                  },
                })
              }
            />
            <TableCell className="flex justify-between">
              <ResetButton
                click={() =>
                  props.setConfig({
                    ...props.config,
                    operating: {
                      ...props.config.operating,
                      slotReservationTimeout: new Operating()
                        .slotReservationTimeout,
                    },
                  })
                }
              />
              <HelpButton parameterName="slotReservationTimeout" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Separator className="my-6" />
      <h2 className="scroll-m-20 font-extrabold tracking-tight lg:text-2xl">
        A2S
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Value</TableHead>
            <TableHead>Action(s)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <EditorInput
              parameter={props.config.a2s?.address}
              name="Address"
              key="a2s.address"
              placeholder="xxx.xxx.xxx.xxx"
              change={(v) =>
                props.setConfig({
                  ...props.config,
                  a2s: { ...props.config.a2s, address: v },
                })
              }
            />
            <TableCell className="flex justify-between">
              <ResetButton
                click={() =>
                  props.setConfig({
                    ...props.config,
                    a2s: { ...props.config.a2s, address: new A2s().address },
                  })
                }
              />
              <HelpButton parameterName="address" />
            </TableCell>
          </TableRow>
          <TableRow>
            <EditorInput
              parameter={props.config.a2s?.port}
              min={1}
              max={65535}
              name="Port"
              key="a2s.port"
              change={(v) =>
                props.setConfig({
                  ...props.config,
                  a2s: { ...props.config.a2s, port: parseInt(v) },
                })
              }
            />
            <TableCell className="flex justify-between">
              <ResetButton
                click={() =>
                  props.setConfig({
                    ...props.config,
                    a2s: { ...props.config.a2s, port: new A2s().port },
                  })
                }
              />
              <HelpButton parameterName="port" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Separator className="my-6" />
      <h2 className="scroll-m-20 font-extrabold tracking-tight lg:text-2xl">
        RCON
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Value</TableHead>
            <TableHead>Action(s)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <EditorInput
              parameter={props.config.rcon?.address}
              name="Address"
              key="rcon.address"
              placeholder="xxx.xxx.xxx.xxx"
              change={(v) =>
                props.setConfig({
                  ...props.config,
                  rcon: { ...props.config.rcon, address: v },
                })
              }
            />
            <TableCell className="flex justify-between">
              <ResetButton
                click={() =>
                  props.setConfig({
                    ...props.config,
                    rcon: { ...props.config.rcon, address: new Rcon().address },
                  })
                }
              />
              <HelpButton parameterName="rcon" />
            </TableCell>
          </TableRow>
          <TableRow>
            <EditorInput
              parameter={props.config.rcon?.port}
              min={1}
              max={65535}
              name="Port"
              key="rcon.port"
              change={(v) =>
                props.setConfig({
                  ...props.config,
                  rcon: { ...props.config.rcon, port: parseInt(v) },
                })
              }
            />
            <TableCell className="flex justify-between">
              <ResetButton
                click={() =>
                  props.setConfig({
                    ...props.config,
                    rcon: { ...props.config.rcon, port: new Rcon().port },
                  })
                }
              />
              <HelpButton parameterName="rcon" />
            </TableCell>
          </TableRow>
          <TableRow>
            <PasswordInput
              parameter={props.config.rcon?.password}
              name="Password"
              key="rcon.password"
              change={(v) =>
                props.setConfig({
                  ...props.config,
                  rcon: { ...props.config.rcon, password: v },
                })
              }
            />
            <TableCell className="flex justify-between">
              <ResetButton
                click={() =>
                  props.setConfig({
                    ...props.config,
                    rcon: {
                      ...props.config.rcon,
                      password: new Rcon().password,
                    },
                  })
                }
              />
              <HelpButton parameterName="password" />
            </TableCell>
          </TableRow>
          <TableRow>
            <EditorInput
              parameter={props.config.rcon?.maxClients}
              min={1}
              max={16}
              name="Max Clients"
              key="rcon.maxClients"
              change={(v) =>
                props.setConfig({
                  ...props.config,
                  rcon: { ...props.config.rcon, maxClients: parseInt(v) },
                })
              }
            />
            <TableCell className="flex justify-between">
              <ResetButton
                click={() =>
                  props.setConfig({
                    ...props.config,
                    rcon: {
                      ...props.config.rcon,
                      maxClients: new Rcon().maxClients,
                    },
                  })
                }
              />
              <HelpButton parameterName="password" />
            </TableCell>
          </TableRow>
          <TableRow>
            <SelectInput
              parameters={["admin", "monitor"]}
              name="Permission"
              selected={props.config.rcon?.permission}
              change={(v) =>
                props.setConfig({
                  ...props.config,
                  rcon: {
                    ...props.config.rcon,
                    permission: v as "admin" | "monitor",
                  },
                })
              }
            />
            <TableCell className="flex justify-between">
              <ResetButton
                click={() =>
                  props.setConfig({
                    ...props.config,
                    rcon: {
                      ...props.config.rcon,
                      permission: new Rcon().permission,
                    },
                  })
                }
              />
              <HelpButton parameterName="permission" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Separator className="my-6" />
      <h2 className="scroll-m-20 font-extrabold tracking-tight lg:text-2xl">
        Game
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Value</TableHead>
            <TableHead>Action(s)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <EditorInput
              parameter={props.config.game?.name}
              min={0}
              max={100}
              name="Name"
              key="game.name"
              change={(v) =>
                props.setConfig({
                  ...props.config,
                  game: { ...props.config.game, name: v },
                })
              }
            />
            <TableCell className="flex justify-between">
              <ResetButton
                click={() =>
                  props.setConfig({
                    ...props.config,
                    game: { ...props.config.game, name: new Game().name },
                  })
                }
              />
              <HelpButton parameterName="name" />
            </TableCell>
          </TableRow>
          <TableRow>
            <PasswordInput
              parameter={props.config.game?.password}
              name="Password"
              key="game.password"
              change={(v) =>
                props.setConfig({
                  ...props.config,
                  game: { ...props.config.game, password: v },
                })
              }
            />
            <TableCell className="flex justify-between">
              <ResetButton
                click={() =>
                  props.setConfig({
                    ...props.config,
                    game: {
                      ...props.config.game,
                      password: new Game().password,
                    },
                  })
                }
              />
              <HelpButton parameterName="password" />
            </TableCell>
          </TableRow>
          <TableRow>
            <PasswordInput
              parameter={props.config.game?.passwordAdmin}
              name="Password Admin"
              key="game.passwordAdmin"
              change={(v) =>
                props.setConfig({
                  ...props.config,
                  game: { ...props.config.game, passwordAdmin: v },
                })
              }
            />
            <TableCell className="flex justify-between">
              <ResetButton
                click={() =>
                  props.setConfig({
                    ...props.config,
                    game: {
                      ...props.config.game,
                      passwordAdmin: new Game().passwordAdmin,
                    },
                  })
                }
              />
              <HelpButton parameterName="passwordAdmin" />
            </TableCell>
          </TableRow>
          <TableRow>
            <EditorInput
              parameter={props.config.game?.scenarioId}
              name="Scenario Id"
              key="game.scenarioId"
              change={(v) =>
                props.setConfig({
                  ...props.config,
                  game: { ...props.config.game, scenarioId: v },
                })
              }
            />
            <TableCell className="flex justify-between">
              <ResetButton
                click={() =>
                  props.setConfig({
                    ...props.config,
                    game: {
                      ...props.config.game,
                      scenarioId: new Game().scenarioId,
                    },
                  })
                }
              />
              <HelpButton parameterName="scenarioId" />
            </TableCell>
          </TableRow>
          <TableRow>
            <EditorInput
              parameter={props.config.game?.maxPlayers}
              min={1}
              max={256}
              name="Max Players"
              key="game.maxPlayers"
              change={(v) =>
                props.setConfig({
                  ...props.config,
                  game: { ...props.config.game, maxPlayers: parseInt(v) },
                })
              }
            />
            <TableCell className="flex justify-between">
              <ResetButton
                click={() =>
                  props.setConfig({
                    ...props.config,
                    game: {
                      ...props.config.game,
                      maxPlayers: new Game().maxPlayers,
                    },
                  })
                }
              />
              <HelpButton parameterName="maxPlayers" />
            </TableCell>
          </TableRow>
          <TableRow>
            <SwitchInput
              parameter={props.config.game?.visible}
              name="Visible"
              key="game.visible"
              change={(v) =>
                props.setConfig({
                  ...props.config,
                  game: { ...props.config.game, visible: v },
                })
              }
            />
            <TableCell className="flex justify-between">
              <ResetButton
                click={() =>
                  props.setConfig({
                    ...props.config,
                    game: { ...props.config.game, visible: new Game().visible },
                  })
                }
              />
              <HelpButton parameterName="visible" />
            </TableCell>
          </TableRow>
          <TableRow>
            <SwitchInput
              parameter={props.config.game?.crossPlatform}
              name="Cross Platform"
              key="game.crossPlatform"
              change={(v) =>
                props.setConfig({
                  ...props.config,
                  game: { ...props.config.game, crossPlatform: v },
                })
              }
            />
            <TableCell className="flex justify-between">
              <ResetButton
                click={() =>
                  props.setConfig({
                    ...props.config,
                    game: {
                      ...props.config.game,
                      crossPlatform: new Game().crossPlatform,
                    },
                  })
                }
              />
              <HelpButton parameterName="crossPlatform" />
            </TableCell>
          </TableRow>
          <TableRow>
            <MultiSelectInput
              disabled={true}
              name="Supported Platforms"
              options={[
                {
                  value: Platform.PLATFORM_PC.toString(),
                  label: Platform.PLATFORM_PC.toString(),
                },
                {
                  value: Platform.PLATFORM_XBL.toString(),
                  label: Platform.PLATFORM_XBL.toString(),
                },
              ]}
              selected={props.config.game?.supportedPlatforms.map((s) => ({
                label: s.toString(),
                value: s.toString(),
              }))}
              change={(v) => {
                console.log(v);
                props.setConfig({
                  ...props.config,
                  game: {
                    ...props.config.game,
                    supportedPlatforms: v.map(
                      (p) => Platform[p.value as keyof typeof Platform]
                    ),
                  },
                });
                console.log(props.config.game?.supportedPlatforms);
              }}
            />
            <TableCell className="flex justify-between">
              <ResetButton
                click={() =>
                  props.setConfig({
                    ...props.config,
                    game: {
                      ...props.config.game,
                      supportedPlatforms: new Game().supportedPlatforms,
                    },
                  })
                }
              />
              <HelpButton parameterName="supportedPlatforms" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Separator className="my-6" />
      <h2 className="scroll-m-20 font-extrabold tracking-tight lg:text-2xl">
        Admins
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Value</TableHead>
            <TableHead>Action(s)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.config.game?.admins.map((admin, index) => {
            return (
              <TableRow key={`Admin-${index}`}>
                <EditorInput
                  key={`Admin-${index.toString()}`}
                  parameter={admin}
                  name={`Admin ${index + 1}`}
                  disabled={true}
                  change={(v) => console.log("TODO:")}
                />
                <TableCell className="flex justify-between">
                  <HelpButton parameterName="admins" />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Separator className="my-6" />
      <h2 className="scroll-m-20 font-extrabold tracking-tight lg:text-2xl">
        Game Properties
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Value</TableHead>
            <TableHead>Action(s)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <EditorInput
              parameter={
                props.config.game?.gameProperties.serverMaxViewDistance
              }
              min={500}
              max={10000}
              name="Server Max View Distance"
              key="gameProperties.serverMaxViewDistance"
              change={(v) =>
                props.setConfig({
                  ...props.config,
                  game: {
                    ...props.config.game,
                    gameProperties: {
                      ...props.config.game.gameProperties,
                      serverMaxViewDistance: parseInt(v),
                    },
                  },
                })
              }
            />
            <TableCell className="flex justify-between">
              <ResetButton
                click={() =>
                  props.setConfig({
                    ...props.config,
                    game: {
                      ...props.config.game,
                      gameProperties: {
                        ...props.config.game?.gameProperties,
                        serverMaxViewDistance: new GameProperties()
                          .serverMaxViewDistance,
                      },
                    },
                  })
                }
              />
              <HelpButton parameterName="serverMaxViewDistance" />
            </TableCell>
          </TableRow>
          <TableRow>
            <EditorInput
              parameter={
                props.config.game?.gameProperties.serverMinGrassDistance
              }
              min={0}
              max={150}
              name="Server Min Grass Distance"
              key="gameProperties.serverMinGrassDistance"
              change={(v) =>
                props.setConfig({
                  ...props.config,
                  game: {
                    ...props.config.game,
                    gameProperties: {
                      ...props.config.game.gameProperties,
                      serverMinGrassDistance: parseInt(v),
                    },
                  },
                })
              }
            />
            <TableCell className="flex justify-between">
              <ResetButton
                click={() =>
                  props.setConfig({
                    ...props.config,
                    game: {
                      ...props.config.game,
                      gameProperties: {
                        ...props.config.game?.gameProperties,
                        serverMinGrassDistance: new GameProperties()
                          .serverMinGrassDistance,
                      },
                    },
                  })
                }
              />
              <HelpButton parameterName="serverMinGrassDistance" />
            </TableCell>
          </TableRow>
          <TableRow>
            <EditorInput
              parameter={props.config.game?.gameProperties.networkViewDistance}
              min={500}
              max={5000}
              name="Network View Distance"
              key="gameProperties.networkViewDistance"
              change={(v) =>
                props.setConfig({
                  ...props.config,
                  game: {
                    ...props.config.game,
                    gameProperties: {
                      ...props.config.game.gameProperties,
                      networkViewDistance: parseInt(v),
                    },
                  },
                })
              }
            />
            <TableCell className="flex justify-between">
              <ResetButton
                click={() =>
                  props.setConfig({
                    ...props.config,
                    game: {
                      ...props.config.game,
                      gameProperties: {
                        ...props.config.game?.gameProperties,
                        networkViewDistance: new GameProperties()
                          .networkViewDistance,
                      },
                    },
                  })
                }
              />
              <HelpButton parameterName="networkViewDistance" />
            </TableCell>
          </TableRow>
          <TableRow>
            <SwitchInput
              parameter={props.config.game?.gameProperties.disableThirdPerson}
              name="Disable Third Person"
              key="gameProperties.disableThirdPerson"
              change={(v) =>
                props.setConfig({
                  ...props.config,
                  game: {
                    ...props.config.game,
                    gameProperties: {
                      ...props.config.game.gameProperties,
                      disableThirdPerson: v,
                    },
                  },
                })
              }
            />
            <TableCell className="flex justify-between">
              <ResetButton
                click={() =>
                  props.setConfig({
                    ...props.config,
                    game: {
                      ...props.config.game,
                      gameProperties: {
                        ...props.config.game?.gameProperties,
                        disableThirdPerson: new GameProperties()
                          .disableThirdPerson,
                      },
                    },
                  })
                }
              />
              <HelpButton parameterName="disableThirdPerson" />
            </TableCell>
          </TableRow>
          <TableRow>
            <SwitchInput
              parameter={props.config.game?.gameProperties.fastValidation}
              name="Fast Validation"
              key="gameProperties.fastValidation"
              change={(v) =>
                props.setConfig({
                  ...props.config,
                  game: {
                    ...props.config.game,
                    gameProperties: {
                      ...props.config.game.gameProperties,
                      fastValidation: v,
                    },
                  },
                })
              }
            />
            <TableCell className="flex justify-between">
              <ResetButton
                click={() =>
                  props.setConfig({
                    ...props.config,
                    game: {
                      ...props.config.game,
                      gameProperties: {
                        ...props.config.game?.gameProperties,
                        fastValidation: new GameProperties().fastValidation,
                      },
                    },
                  })
                }
              />
              <HelpButton parameterName="fastValidation" />
            </TableCell>
          </TableRow>
          <TableRow>
            <SwitchInput
              parameter={props.config.game?.gameProperties.battlEye}
              name="BattleEye"
              key="gameProperties.battlEye"
              change={(v) =>
                props.setConfig({
                  ...props.config,
                  game: {
                    ...props.config.game,
                    gameProperties: {
                      ...props.config.game.gameProperties,
                      battlEye: v,
                    },
                  },
                })
              }
            />
            <TableCell className="flex justify-between">
              <ResetButton
                click={() =>
                  props.setConfig({
                    ...props.config,
                    game: {
                      ...props.config.game,
                      gameProperties: {
                        ...props.config.game?.gameProperties,
                        battlEye: new GameProperties().battlEye,
                      },
                    },
                  })
                }
              />
              <HelpButton parameterName="battlEye" />
            </TableCell>
          </TableRow>
          <TableRow>
            <SwitchInput
              parameter={props.config.game?.gameProperties.VONDisableUI}
              name="VON Disable UI"
              key="gameProperties.VONDisableUI"
              change={(v) =>
                props.setConfig({
                  ...props.config,
                  game: {
                    ...props.config.game,
                    gameProperties: {
                      ...props.config.game.gameProperties,
                      VONDisableUI: v,
                    },
                  },
                })
              }
            />
            <TableCell className="flex justify-between">
              <ResetButton
                click={() =>
                  props.setConfig({
                    ...props.config,
                    game: {
                      ...props.config.game,
                      gameProperties: {
                        ...props.config.game?.gameProperties,
                        VONDisableUI: new GameProperties().VONDisableUI,
                      },
                    },
                  })
                }
              />
              <HelpButton parameterName="VONDisableUI" />
            </TableCell>
          </TableRow>
          <TableRow>
            <SwitchInput
              parameter={
                props.config.game?.gameProperties.VONDisableDirectSpeechUI
              }
              name="VON Disable Direct Speech UI"
              key="gameProperties.VONDisableDirectSpeechUI"
              change={(v) =>
                props.setConfig({
                  ...props.config,
                  game: {
                    ...props.config.game,
                    gameProperties: {
                      ...props.config.game.gameProperties,
                      VONDisableDirectSpeechUI: v,
                    },
                  },
                })
              }
            />
            <TableCell className="flex justify-between">
              <ResetButton
                click={() =>
                  props.setConfig({
                    ...props.config,
                    game: {
                      ...props.config.game,
                      gameProperties: {
                        ...props.config.game?.gameProperties,
                        VONDisableDirectSpeechUI: new GameProperties()
                          .VONDisableDirectSpeechUI,
                      },
                    },
                  })
                }
              />
              <HelpButton parameterName="VONDisableDirectSpeechUI" />
            </TableCell>
          </TableRow>
          <TableRow>
            <SwitchInput
              parameter={
                props.config.game?.gameProperties.VONCanTransmitCrossFaction
              }
              name="VON Can Transmit Cross Faction"
              key="gameProperties.VONCanTransmitCrossFaction"
              change={(v) =>
                props.setConfig({
                  ...props.config,
                  game: {
                    ...props.config.game,
                    gameProperties: {
                      ...props.config.game.gameProperties,
                      VONCanTransmitCrossFaction: v,
                    },
                  },
                })
              }
            />
            <TableCell className="flex justify-between">
              <ResetButton
                click={() =>
                  props.setConfig({
                    ...props.config,
                    game: {
                      ...props.config.game,
                      gameProperties: {
                        ...props.config.game?.gameProperties,
                        VONCanTransmitCrossFaction: new GameProperties()
                          .VONCanTransmitCrossFaction,
                      },
                    },
                  })
                }
              />
              <HelpButton parameterName="VONCanTransmitCrossFaction" />
            </TableCell>
          </TableRow>
          <TableRow>
            <EditorInput
              parameter={props.config.game?.gameProperties.missionHeader.toString()}
              name="Mission Header"
              key="gameProperties.missionHeader"
              disabled={true}
              change={(v) => console.log("TODO:")}
            />
            <TableCell className="flex justify-between">
              <ResetButton
                click={() =>
                  props.setConfig({
                    ...props.config,
                    game: {
                      ...props.config.game,
                      gameProperties: {
                        ...props.config.game?.gameProperties,
                        missionHeader: new GameProperties().missionHeader,
                      },
                    },
                  })
                }
              />
              <HelpButton parameterName="missionHeader" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Separator className="my-6" />
      <h2 className="scroll-m-20 font-extrabold tracking-tight lg:text-2xl">
        Mods
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Version</TableHead>
            <TableHead>Action(s)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.config.game?.mods.map((mod, index) => {
            return (
              <TableRow key={`Mod-${index}`}>
                <EditorInput
                  key={index.toString() + "ModID"}
                  parameter={mod.modId}
                  disabled={true}
                  change={(v) => console.log("TODO:")}
                />
                <EditorInput
                  key={index.toString() + "ModName"}
                  parameter={mod.name}
                  disabled={true}
                  change={(v) => console.log("TODO:")}
                />
                <EditorInput
                  key={index.toString() + "ModVersion"}
                  parameter={mod.version}
                  disabled={true}
                  change={(v) => console.log("TODO:")}
                />
                <TableCell>
                  <HelpButton parameterName="mods" />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};
