"use client";

import { EditorProps } from "./props/EditorProps";
import dynamic from "next/dynamic";
import { useMediaQuery } from "usehooks-ts";
import { Loading } from "./loading";

const BaseTable = dynamic(() => import('../components/tables/desktop/base').then((base) => base.BaseTable), {
  loading: () => <Loading />
});
const OperatingTable = dynamic(() => import('../components/tables/desktop/operating').then((operating) => operating.OperatingTable), {
  loading: () => <Loading />
});
const A2STable = dynamic(() => import('../components/tables/desktop/a2s').then((a2s) => a2s.A2STable), {
  loading: () => <Loading />
});
const RconTable = dynamic(() => import('../components/tables/desktop/rcon').then((rcon) => rcon.RconTable), {
  loading: () => <Loading />
});
const GameTable = dynamic(() => import('../components/tables/desktop/game').then((game) => game.GameTable), {
  loading: () => <Loading />
});
const AdminTable = dynamic(() => import('../components/tables/desktop/admins').then((admins) => admins.AdminTable), {
  loading: () => <Loading />
});
const GamePropertiesTable = dynamic(() => import('../components/tables/desktop/gameproperties').then((gameproperties) => gameproperties.GamePropertiesTable), {
  loading: () => <Loading />
});
const ModsTable = dynamic(() => import('../components/tables/desktop/mods').then((mods) => mods.ModsTable), {
  loading: () => <Loading />
});

export const Editor = (props: EditorProps) => {
  const isDesktop = useMediaQuery("(min-width: 960px)");

  return (
    <>
      <h3 className="scroll-m-20 font-extrabold tracking-tight lg:text-2xl red">
        {props.current}
      </h3>
      {props.current === "Base" && (
        <BaseTable config={props.config} setConfig={props.setConfig} isDesktop={isDesktop}/>
      )}
      {props.current === "Operating" && (
        <OperatingTable config={props.config} setConfig={props.setConfig} isDesktop={isDesktop}/>
      )}
      {props.current === "A2S" && (
        <A2STable config={props.config} setConfig={props.setConfig} isDesktop={isDesktop}/>
      )}
      {props.current === "RCON" && (
        <RconTable config={props.config} setConfig={props.setConfig} isDesktop={isDesktop}/>
      )}
      {props.current === "Game" && (
        <GameTable config={props.config} setConfig={props.setConfig} isDesktop={isDesktop}/>
      )}
      {props.current === "Admins" && (
        <AdminTable config={props.config} setConfig={props.setConfig} isDesktop={isDesktop}/>
      )}
      {props.current === "Game Properties" && (
        <GamePropertiesTable
          config={props.config}
          setConfig={props.setConfig}
          isDesktop={isDesktop}
        />
      )}
      {props.current === "Mods" && (
        <ModsTable config={props.config} setConfig={props.setConfig} isDesktop={isDesktop}/>
      )}
    </>
  );
};
