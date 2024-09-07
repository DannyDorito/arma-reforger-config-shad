"use client";

import { GameTableProps } from "@/components/props/GameTableProps";
import { CustomTableHeader } from "@/components/table-header";
import { HelpButton } from "@/components/ui/buttons/help-button";
import { ResetButton } from "@/components/ui/buttons/reset-button";
import { EditorInput } from "@/components/ui/custom-input/editor-input";
import { MultiSelectInput } from "@/components/ui/custom-input/multiselect-input";
import { PasswordInput } from "@/components/ui/custom-input/password-input";
import { SwitchInput } from "@/components/ui/custom-input/switch-input";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Game, Platform } from "@/types/Config";
import { SupportedPlatforms } from "@/types/SupportedPlatforms";

export const GameTable = (props: GameTableProps) => {
  if (props.isDesktop) {
    return (
      <Table>
        <CustomTableHeader headers={["Name", "Value", "Actions"]} />
        <TableBody>
          <TableRow>
            <EditorInput
              isDesktop={props.isDesktop}
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
              required={true}
            />
            <TableCell>
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
              isDesktop={props.isDesktop}
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
            <TableCell>
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
              isDesktop={props.isDesktop}
              parameter={props.config.game?.passwordAdmin}
              name="Password Admin"
              key="game.passwordAdmin"
              change={(v) =>
                props.setConfig({
                  ...props.config,
                  game: { ...props.config.game, passwordAdmin: v },
                })
              }
              required={true}
            />
            <TableCell>
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
              isDesktop={props.isDesktop}
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
            <TableCell>
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
              isDesktop={props.isDesktop}
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
            <TableCell>
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
              isDesktop={props.isDesktop}
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
            <TableCell>
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
              isDesktop={props.isDesktop}
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
            <TableCell>
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
              isDesktop={props.isDesktop}
              disabled={true}
              name="Supported Platforms"
              options={SupportedPlatforms}
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
            <TableCell>
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
    );
  } else {
    return (
      <>
        <EditorInput
          isDesktop={props.isDesktop}
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
          required={true}
        />
        <PasswordInput
          isDesktop={props.isDesktop}
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
        <PasswordInput
          isDesktop={props.isDesktop}
          parameter={props.config.game?.passwordAdmin}
          name="Password Admin"
          key="game.passwordAdmin"
          change={(v) =>
            props.setConfig({
              ...props.config,
              game: { ...props.config.game, passwordAdmin: v },
            })
          }
          required={true}
        />
        <EditorInput
          isDesktop={props.isDesktop}
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
        <EditorInput
          isDesktop={props.isDesktop}
          parameter={props.config.game?.maxPlayers}
          min={1}
          max={128}
          name="Max Players"
          key="game.maxPlayers"
          change={(v) =>
            props.setConfig({
              ...props.config,
              game: { ...props.config.game, maxPlayers: parseInt(v) },
            })
          }
        />
        <SwitchInput
          isDesktop={props.isDesktop}
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
        <SwitchInput
          isDesktop={props.isDesktop}
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
        <MultiSelectInput
          isDesktop={props.isDesktop}
          disabled={true}
          name="Supported Platforms"
          options={SupportedPlatforms}
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
      </>
    );
  }
};
