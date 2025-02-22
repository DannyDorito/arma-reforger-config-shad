"use client";

import { EditorProps } from "./props/EditorProps";
import dynamic from "next/dynamic";
import { Loading } from "./loading";

const BaseTable = dynamic(
  () => import("./tables/base").then((base) => base.BaseTable),
  {
    loading: () => <Loading />,
  }
);
const OperatingTable = dynamic(
  () =>
    import("./tables/operating").then((operating) => operating.OperatingTable),
  {
    loading: () => <Loading />,
  }
);
const A2STable = dynamic(
  () => import("./tables/a2s").then((a2s) => a2s.A2STable),
  {
    loading: () => <Loading />,
  }
);
const RconTable = dynamic(
  () => import("./tables/rcon").then((rcon) => rcon.RconTable),
  {
    loading: () => <Loading />,
  }
);
const GameTable = dynamic(
  () => import("./tables/game").then((game) => game.GameTable),
  {
    loading: () => <Loading />,
  }
);
const AdminTable = dynamic(
  () => import("./tables/admins").then((admins) => admins.AdminTable),
  {
    loading: () => <Loading />,
  }
);
const GamePropertiesTable = dynamic(
  () =>
    import("./tables/gameproperties").then(
      (gameproperties) => gameproperties.GamePropertiesTable
    ),
  {
    loading: () => <Loading />,
  }
);
const ModsTable = dynamic(
  () => import("./tables/mods").then((mods) => mods.ModsTable),
  {
    loading: () => <Loading />,
  }
);

export const Editor = (props: EditorProps) => {
  return (
    <>
      <h3 className="scroll-m-20 font-extrabold tracking-tight lg:text-2xl red">
        {props.current}
      </h3>
      {props.current === "Base" && (
        <BaseTable
          config={props.config}
          setConfig={props.setConfig}
        />
      )}
      {props.current === "Operating" && (
        <OperatingTable
          config={props.config}
          setConfig={props.setConfig}
        />
      )}
      {props.current === "A2S" && (
        <A2STable
          config={props.config}
          setConfig={props.setConfig}
        />
      )}
      {props.current === "RCON" && (
        <RconTable
          config={props.config}
          setConfig={props.setConfig}
        />
      )}
      {props.current === "Game" && (
        <GameTable
          config={props.config}
          setConfig={props.setConfig}
        />
      )}
      {props.current === "Admins" && (
        <AdminTable
          config={props.config}
          setConfig={props.setConfig}
        />
      )}
      {props.current === "Game Properties" && (
        <GamePropertiesTable
          config={props.config}
          setConfig={props.setConfig}
        />
      )}
      {props.current === "Mods" && (
        <ModsTable
          config={props.config}
          setConfig={props.setConfig}
        />
      )}
    </>
  );
};
