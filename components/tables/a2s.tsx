"use client";

import { A2STableProps } from "@/components/props/A2STableProps";
import { HelpButton } from "@/components/ui/buttons/help-button";
import { ResetButton } from "@/components/ui/buttons/reset-button";
import { EditorInput } from "@/components/ui/custom-input/editor-input";
import { A2s } from "@/types/Config";

export const A2STable = (props: A2STableProps) => {
  return (
    <>
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
        required={true}
        buttons={[
          <ResetButton
            key="a2s.address-reset"
            click={() =>
              props.setConfig({
                ...props.config,
                a2s: { ...props.config.a2s, address: new A2s().address },
              })
            }
          />,
          <HelpButton parameterName="address" key="a2s.address-help" />,
        ]}
      />
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
        buttons={[
          <ResetButton
            key="a2s.port-reset"
            click={() =>
              props.setConfig({
                ...props.config,
                a2s: { ...props.config.a2s, port: new A2s().port },
              })
            }
          />,
          <HelpButton parameterName="port" key="a2s.port-help" />,
        ]}
      />
    </>
  );
};
