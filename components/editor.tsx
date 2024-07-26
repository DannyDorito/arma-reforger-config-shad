"use client";

import { EditorProps } from "./props/EditorProps";
import { useState } from "react";
import dynamic from "next/dynamic";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { Loading } from "./loading";

const BaseTable = dynamic(() => import('../components/tables/base').then((base) => base.BaseTable), {
  loading: () => <Loading />
});
const OperatingTable = dynamic(() => import('../components/tables/operating').then((operating) => operating.OperatingTable), {
  loading: () => <Loading />
});
const A2STable = dynamic(() => import('../components/tables/a2s').then((a2s) => a2s.A2STable), {
  loading: () => <Loading />
});
const RconTable = dynamic(() => import('../components/tables/rcon').then((rcon) => rcon.RconTable), {
  loading: () => <Loading />
});
const GameTable = dynamic(() => import('../components/tables/game').then((game) => game.GameTable), {
  loading: () => <Loading />
});
const AdminTable = dynamic(() => import('../components/tables/admins').then((admins) => admins.AdminTable), {
  loading: () => <Loading />
});
const GamePropertiesTable = dynamic(() => import('../components/tables/gameproperties').then((gameproperties) => gameproperties.GamePropertiesTable), {
  loading: () => <Loading />
});
const ModsTable = dynamic(() => import('../components/tables/mods').then((mods) => mods.ModsTable), {
  loading: () => <Loading />
});

export const Editor = (props: EditorProps) => {
  const [current, setCurrent] = useState<string>("Base");

  const currentFormatting = (page: string) =>
    current === page ? "font-normal text-foreground" : "";

  return (
    <>
      <Breadcrumb className="flex justify-evenly space-y-1.5 p-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              onClick={() => setCurrent("Base")}
              className="cursor-pointer"
            >
              <h2 className={currentFormatting("Base")}>Base</h2>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              onClick={() => setCurrent("Operating")}
              className="cursor-pointer"
            >
              <h2 className={currentFormatting("Operating")}>Operating</h2>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              onClick={() => setCurrent("A2S")}
              className="cursor-pointer"
            >
              <h2 className={currentFormatting("A2S")}>A2S</h2>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              onClick={() => setCurrent("RCON")}
              className="cursor-pointer"
            >
              <h2 className={currentFormatting("RCON")}>RCON</h2>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              onClick={() => setCurrent("Game")}
              className="cursor-pointer"
            >
              <h2 className={currentFormatting("Game")}>Game</h2>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              onClick={() => setCurrent("Admins")}
              className="cursor-pointer"
            >
              <h2 className={currentFormatting("Admins")}>Admins</h2>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              onClick={() => setCurrent("Game Properties")}
              className="cursor-pointer"
            >
              <h2 className={currentFormatting("Game Properties")}>
                Game Properties
              </h2>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              onClick={() => setCurrent("Mods")}
              className="cursor-pointer"
            >
              <h2 className={currentFormatting("Mods")}>Mods</h2>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h3 className="scroll-m-20 font-extrabold tracking-tight lg:text-2xl">
        {current}
      </h3>
      {current === "Base" && (
        <BaseTable config={props.config} setConfig={props.setConfig} />
      )}
      {current === "Operating" && (
        <OperatingTable config={props.config} setConfig={props.setConfig} />
      )}
      {current === "A2S" && (
        <A2STable config={props.config} setConfig={props.setConfig} />
      )}
      {current === "RCON" && (
        <RconTable config={props.config} setConfig={props.setConfig} />
      )}
      {current === "Game" && (
        <GameTable config={props.config} setConfig={props.setConfig} />
      )}
      {current === "Admins" && (
        <AdminTable config={props.config} setConfig={props.setConfig} />
      )}
      {current === "Game Properties" && (
        <GamePropertiesTable
          config={props.config}
          setConfig={props.setConfig}
        />
      )}
      {current === "Mods" && (
        <ModsTable config={props.config} setConfig={props.setConfig} />
      )}
    </>
  );
};
