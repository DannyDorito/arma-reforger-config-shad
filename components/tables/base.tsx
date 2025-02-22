"use client";

import { BaseTableProps } from "@/components/props/BaseTableProps";
import { HelpButton } from "@/components/ui/buttons/help-button";
import { ResetButton } from "@/components/ui/buttons/reset-button";
import { EditorInput } from "@/components/ui/custom-input/editor-input";
import { Config } from "@/types/Config";

export const BaseTable = (props: BaseTableProps) => {
  return (
    <>
      <EditorInput
        parameter={props.config.bindAddress}
        name="Bind Address"
        key="bindAddress"
        placeholder="xxx.xxx.xxx.xxx"
        change={(v) => props.setConfig({ ...props.config, bindAddress: v })}
        required={true}
        buttons={[
          <ResetButton
            key="bindAddress-reset"
            click={() =>
              props.setConfig({
                ...props.config,
                bindAddress: new Config().bindAddress,
              })
            }
          />,
          <HelpButton parameterName="bindAddress" key="bindAddress-help" />,
        ]}
      />
      <EditorInput
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
            key="bindPort-reset"
            click={() =>
              props.setConfig({
                ...props.config,
                bindPort: new Config().bindPort,
              })
            }
          />,
          <HelpButton parameterName="bindPort" key="bindPort-help" />,
        ]}
      />
      <EditorInput
        parameter={props.config.publicAddress}
        name="Public Address"
        key="publicAddress"
        placeholder="xxx.xxx.xxx.xxx"
        change={(v) => props.setConfig({ ...props.config, publicAddress: v })}
        required={true}
        buttons={[
          <ResetButton
            key="publicAddress-reset"
            click={() =>
              props.setConfig({
                ...props.config,
                publicAddress: new Config().publicAddress,
              })
            }
          />,
          <HelpButton parameterName="publicAddress" key="publicAddress-help" />,
        ]}
      />
      <EditorInput
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
            key="publicPort-reset"
            click={() =>
              props.setConfig({
                ...props.config,
                publicPort: new Config().publicPort,
              })
            }
          />,
          <HelpButton parameterName="publicPort" key="publicPort-help" />,
        ]}
      />
    </>
  );
};
