"use client";

import { BaseTableProps } from "@/components/props/BaseTableProps";
import { CustomTableHeader } from "@/components/table-header";
import { HelpButton } from "@/components/ui/buttons/help-button";
import { ResetButton } from "@/components/ui/buttons/reset-button";
import { EditorInput } from "@/components/ui/custom-input/editor-input";
import { Table, TableBody, TableRow } from "@/components/ui/table";
import { Config } from "@/types/Config";

export const BaseTable = (props: BaseTableProps) => {
  if (props.isDesktop) {
    return (
      <Table>
        <CustomTableHeader headers={["Name", "Value"]} />
        <TableBody>
          <TableRow>
            <EditorInput
              isDesktop={props.isDesktop}
              parameter={props.config.bindAddress}
              name="Bind Address"
              key="bindAddress"
              placeholder="xxx.xxx.xxx.xxx"
              change={(v) =>
                props.setConfig({ ...props.config, bindAddress: v })
              }
              required={true}
              buttons={[
                <ResetButton
                  click={() =>
                    props.setConfig({
                      ...props.config,
                      bindAddress: new Config().bindAddress,
                    })
                  }
                />,
                <HelpButton parameterName="bindAddress" />,
              ]}
            />
          </TableRow>
          <TableRow>
            <EditorInput
              isDesktop={props.isDesktop}
              parameter={props.config.bindPort}
              min={1}
              max={65535}
              name="Bind Port"
              key="bindPort"
              change={(v) =>
                props.setConfig({ ...props.config, bindPort: parseInt(v) })
              }
              required={true}
              buttons={[
                <ResetButton
                  click={() =>
                    props.setConfig({
                      ...props.config,
                      bindPort: new Config().bindPort,
                    })
                  }
                />,
                <HelpButton parameterName="bindPort" />,
              ]}
            />
          </TableRow>
          <TableRow>
            <EditorInput
              isDesktop={props.isDesktop}
              parameter={props.config.publicAddress}
              name="Public Address"
              key="publicAddress"
              placeholder="xxx.xxx.xxx.xxx"
              change={(v) =>
                props.setConfig({ ...props.config, publicAddress: v })
              }
              required={true}
              buttons={[
                <ResetButton
                  click={() =>
                    props.setConfig({
                      ...props.config,
                      publicAddress: new Config().publicAddress,
                    })
                  }
                />,
                <HelpButton parameterName="publicAddress" />,
              ]}
            />
          </TableRow>
          <TableRow>
            <EditorInput
              isDesktop={props.isDesktop}
              parameter={props.config.publicPort}
              min={1}
              max={65535}
              name="Public Port"
              key="publicPort"
              change={(v) =>
                props.setConfig({ ...props.config, publicPort: parseInt(v) })
              }
              required={true}
              buttons={[
                <ResetButton
                  click={() =>
                    props.setConfig({
                      ...props.config,
                      publicPort: new Config().publicPort,
                    })
                  }
                />,
                <HelpButton parameterName="publicPort" />,
              ]}
            />
          </TableRow>
        </TableBody>
      </Table>
    );
  } else {
    return (
      <>
        <EditorInput
          isDesktop={props.isDesktop}
          parameter={props.config.bindAddress}
          name="Bind Address"
          key="bindAddress"
          placeholder="xxx.xxx.xxx.xxx"
          change={(v) => props.setConfig({ ...props.config, bindAddress: v })}
          required={true}
          buttons={[
            <ResetButton
              click={() =>
                props.setConfig({
                  ...props.config,
                  bindAddress: new Config().bindAddress,
                })
              }
            />,
            <HelpButton parameterName="bindAddress" />,
          ]}
        />
        <EditorInput
          isDesktop={props.isDesktop}
          parameter={props.config.bindPort}
          min={1}
          max={65535}
          name="Bind Port"
          key="bindPort"
          change={(v) =>
            props.setConfig({ ...props.config, bindPort: parseInt(v) })
          }
          required={true}
          buttons={[
            <ResetButton
              click={() =>
                props.setConfig({
                  ...props.config,
                  bindPort: new Config().bindPort,
                })
              }
            />,
            <HelpButton parameterName="bindPort" />,
          ]}
        />
        <EditorInput
          isDesktop={props.isDesktop}
          parameter={props.config.publicAddress}
          name="Public Address"
          key="publicAddress"
          placeholder="xxx.xxx.xxx.xxx"
          change={(v) => props.setConfig({ ...props.config, publicAddress: v })}
          required={true}
          buttons={[
            <ResetButton
              click={() =>
                props.setConfig({
                  ...props.config,
                  publicAddress: new Config().publicAddress,
                })
              }
            />,
            <HelpButton parameterName="publicAddress" />,
          ]}
        />
        <EditorInput
          isDesktop={props.isDesktop}
          parameter={props.config.publicPort}
          min={1}
          max={65535}
          name="Public Port"
          key="publicPort"
          change={(v) =>
            props.setConfig({ ...props.config, publicPort: parseInt(v) })
          }
          required={true}
          buttons={[
            <ResetButton
              click={() =>
                props.setConfig({
                  ...props.config,
                  publicPort: new Config().publicPort,
                })
              }
            />,
            <HelpButton parameterName="publicPort" />,
          ]}
        />
      </>
    );
  }
};
