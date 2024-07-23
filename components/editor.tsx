"use client";

import { EditorProps } from "./props/EditorProps";
import { Button } from "./ui/button";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { HelpButton } from "./help-button";
import { EditorInput } from "./ui/custom-input/editor-input";
import { PasswordInput } from "./ui/custom-input/password-input";
import { SwitchInput } from "./ui/custom-input/switch-input";
import { ResetButton } from "./reset-button";
import { A2s, Config, Game, GameProperties, Operating, Rcon } from "@/types/Config";
import { DeleteButton } from "./delete-button";
import { setConfig } from "next/config";

export const Editor = ( props: EditorProps ) =>
{

  return (
    <>
      <h2 className="scroll-m-20 font-extrabold tracking-tight lg:text-2xl">Base</h2>
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
            <EditorInput parameter={props.config.bindAddress} name="Bind Address" key="bindAddress" />
            <TableCell>
              <ResetButton click={() => props.setConfig({...props.config, bindAddress: new Config().bindAddress})} />
              <HelpButton parameterName="bindAddress" />
            </TableCell>
          </TableRow>
          <TableRow>
            <EditorInput parameter={props.config.bindPort} min={1} max={65535} name="Bind Port" key="bindPort" />
            <TableCell>
              <ResetButton click={() => props.setConfig({...props.config, bindPort: new Config().bindPort})} />
              <HelpButton parameterName="bindPort" />
            </TableCell>
          </TableRow>
          <TableRow>
            <EditorInput parameter={props.config.publicAddress} name="Public Address" key="publicAddress" />
            <TableCell>
              <ResetButton click={() => props.setConfig({...props.config, publicAddress: new Config().publicAddress})} />
              <HelpButton parameterName="publicAddress" />
            </TableCell>
          </TableRow>
          <TableRow>
            <EditorInput parameter={props.config.publicPort} min={1} max={65535} name="Public Port" key="publicPort" />
            <TableCell>
              <ResetButton click={() => props.setConfig({...props.config, publicPort: new Config().publicPort})} />
              <HelpButton parameterName="publicPort" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <h2 className="scroll-m-20 font-extrabold tracking-tight lg:text-2xl">Operating</h2>
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
            <SwitchInput parameter={props.config.operating?.lobbyPlayerSynchronise} name="Lobby Player Synchronise" key="operating.lobbyPlayerSynchronise" />
            <TableCell>
              <ResetButton click={() => props.setConfig({...props.config, operating: { ...props.config.operating, lobbyPlayerSynchronise: new Operating().lobbyPlayerSynchronise }})} />
              <HelpButton parameterName="lobbyPlayerSynchronise" />
            </TableCell>
          </TableRow>
          <TableRow>
            {typeof props.config.operating?.disableNavmeshStreaming === 'boolean' ?
              <SwitchInput parameter={props.config.operating?.disableNavmeshStreaming as boolean} name="Disable Navmesh Streaming" key="operating.disableNavmeshStreaming" /> :
              <EditorInput parameter={props.config.operating?.disableNavmeshStreaming as string[]} name="Disable Navmesh Streaming" key="operating.disableNavmeshStreaming" />
            }
            <TableCell>
              <ResetButton click={() => props.setConfig({...props.config, operating: { ...props.config.operating, disableNavmeshStreaming: new Operating().disableNavmeshStreaming }})} />
              <HelpButton parameterName="disableNavmeshStreaming" />
            </TableCell>
          </TableRow>
          <TableRow>
            <SwitchInput parameter={props.config.operating?.disableServerShutdown} name="Disable Server Shutdown" key="operating.disableServerShutdown" />
            <TableCell>
              <ResetButton click={() => props.setConfig({...props.config, operating: { ...props.config.operating, disableServerShutdown: new Operating().disableServerShutdown }})} />
              <HelpButton parameterName="disableServerShutdown" />
            </TableCell>
          </TableRow>
          <TableRow>
            <SwitchInput parameter={props.config.operating?.disableAI} name="Disable AI" key="operating.disableAI" />
            <TableCell>
              <ResetButton click={() => props.setConfig({...props.config, operating: { ...props.config.operating, disableAI: new Operating().disableAI }})} />
              <HelpButton parameterName="disableAI" />
            </TableCell>
          </TableRow>
          <TableRow>
            <EditorInput parameter={props.config.operating?.playerSaveTime} name="Player Save Time" key="operating.playerSaveTime" />
            <TableCell>
              <ResetButton click={() => props.setConfig({...props.config, operating: { ...props.config.operating, playerSaveTime: new Operating().playerSaveTime }})} />
              <HelpButton parameterName="playerSaveTime" />
            </TableCell>
          </TableRow>
          <TableRow>
            <EditorInput parameter={props.config.operating?.aiLimit} name="AI Limit" key="operating.aiLimit" />
            <TableCell>
              <ResetButton click={() => props.setConfig({...props.config, operating: { ...props.config.operating, aiLimit: new Operating().aiLimit }})} />
              <HelpButton parameterName="aiLimit" />
            </TableCell>
          </TableRow>
          <TableRow>
            <EditorInput parameter={props.config.operating?.slotReservationTimeout} min={5} max={300} name="Slot Reservation Timeout" key="operating.slotReservationTimeout" />
            <TableCell>
              <ResetButton click={() => props.setConfig({...props.config, operating: { ...props.config.operating, slotReservationTimeout: new Operating().slotReservationTimeout }})} />
              <HelpButton parameterName="slotReservationTimeout" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <h2 className="scroll-m-20 font-extrabold tracking-tight lg:text-2xl">A2S</h2>
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
            <EditorInput parameter={props.config.a2s?.address} name="Address" key="a2s.address" />
            <TableCell>
              <ResetButton click={() => props.setConfig({...props.config, a2s: { ...props.config.a2s, address: new A2s().address }})} />
              <HelpButton parameterName="address" />
            </TableCell>
          </TableRow>
          <TableRow>
            <EditorInput parameter={props.config.a2s?.port} min={1} max={65535} name="Port" key="a2s.port" />
            <TableCell>
              <ResetButton click={() => props.setConfig({...props.config, a2s: { ...props.config.a2s, port: new A2s().port }})} />
              <HelpButton parameterName="port" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <h2 className="scroll-m-20 font-extrabold tracking-tight lg:text-2xl">RCON</h2>
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
            <EditorInput parameter={props.config.rcon?.address} name="Address" key="rcon.address" />
            <TableCell>
              <ResetButton click={() => props.setConfig({...props.config, rcon: { ...props.config.rcon, address: new Rcon().address }})} />
              <HelpButton parameterName="rcon" />
            </TableCell>
          </TableRow>
          <TableRow>
            <EditorInput parameter={props.config.rcon?.port} min={1} max={65535} name="Port" key="rcon.port" />
            <TableCell>
              <ResetButton click={() => props.setConfig({...props.config, rcon: { ...props.config.rcon, port: new Rcon().port }})} />
              <HelpButton parameterName="rcon" />
            </TableCell>
          </TableRow>
          <TableRow>
            <PasswordInput parameter={props.config.rcon?.password} name="Password" key="rcon.password" />
            <TableCell>
              <ResetButton click={() => props.setConfig({...props.config, rcon: { ...props.config.rcon, password: new Rcon().password }})} />
              <HelpButton parameterName="password" />
            </TableCell>
          </TableRow>
          <TableRow>
            <EditorInput parameter={props.config.rcon?.maxClients} min={1} max={16} name="Max Clients" key="rcon.maxClients" />
            <TableCell>
              <ResetButton click={() => props.setConfig({...props.config, rcon: { ...props.config.rcon, maxClients: new Rcon().maxClients }})} />
              <HelpButton parameterName="password" />
            </TableCell>
          </TableRow>
          <TableRow>
            <EditorInput parameter={props.config.rcon?.permission} name="Permission" key="rcon.permission" />
            <TableCell>
              <ResetButton click={() => props.setConfig({...props.config, rcon: { ...props.config.rcon, permission: new Rcon().permission }})} />
              <HelpButton parameterName="permission" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <h2 className="scroll-m-20 font-extrabold tracking-tight lg:text-2xl">Game</h2>
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
            <EditorInput parameter={props.config.game?.name} min={0} max={100} name="Name" key="game.name" />
            <TableCell>
              <ResetButton click={() => props.setConfig({...props.config, game: { ...props.config.game, name: new Game().name }})} />
              <HelpButton parameterName="name" />
            </TableCell>
          </TableRow>
          <TableRow>
            <PasswordInput parameter={props.config.game?.password} name="Password" key="game.password" />
            <TableCell>
              <ResetButton click={() => props.setConfig({...props.config, game: { ...props.config.game, password: new Game().password }})} />
              <HelpButton parameterName="password" />
            </TableCell>
          </TableRow>
          <TableRow>
            <PasswordInput parameter={props.config.game?.passwordAdmin} name="Password Admin" key="game.passwordAdmin" />
            <TableCell>
              <ResetButton click={() => props.setConfig({...props.config, game: { ...props.config.game, passwordAdmin: new Game().passwordAdmin }})} />
              <HelpButton parameterName="passwordAdmin" />
            </TableCell>
          </TableRow>
          <TableRow>
            <EditorInput parameter={props.config.game?.scenarioId} name="Scenario ID" key="game.scenarioId" />
            <TableCell>
              <ResetButton click={() => props.setConfig({...props.config, game: { ...props.config.game, scenarioId: new Game().scenarioId }})} />
              <HelpButton parameterName="scenarioId" />
            </TableCell>
          </TableRow>
          <TableRow>
            <EditorInput parameter={props.config.game?.maxPlayers} min={1} max={256} name="Max Players" key="game.maxPlayers" />
            <TableCell>
              <ResetButton click={() => props.setConfig({...props.config, game: { ...props.config.game, maxPlayers: new Game().maxPlayers }})} />
              <HelpButton parameterName="maxPlayers" />
            </TableCell>
          </TableRow>
          <TableRow>
            <SwitchInput parameter={props.config.game?.visible} name="Visible" key="game.visible" />
            <TableCell>
              <ResetButton click={() => props.setConfig({...props.config, game: { ...props.config.game, visible: new Game().visible }})} />
              <HelpButton parameterName="visible" />
            </TableCell>
          </TableRow>
          <TableRow>
            <SwitchInput parameter={props.config.game?.crossPlatform} name="Cross Platform" key="game.crossPlatform" />
            <TableCell>
              <ResetButton click={() => props.setConfig({...props.config, game: { ...props.config.game, crossPlatform: new Game().crossPlatform }})} />
              <HelpButton parameterName="crossPlatform" />
            </TableCell>
          </TableRow>
          <TableRow>
            <EditorInput parameter={props.config.game?.supportedPlatforms.join( ", " )} name="Supported Platforms" key="game.supportedPlatforms" />
            <TableCell>
              <ResetButton click={() => props.setConfig({...props.config, game: { ...props.config.game, supportedPlatforms: new Game().supportedPlatforms }})} />
              <HelpButton parameterName="supportedPlatforms" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <h2 className="scroll-m-20 font-extrabold tracking-tight lg:text-2xl">Admins</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Value</TableHead>
            <TableHead>Action(s)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.config.game?.admins.map( ( admin, index ) =>
          {
            return (
              <>
                <EditorInput key={index.toString()} parameter={admin} />
                <TableCell>
                  <HelpButton parameterName="admins" />
                </TableCell>
              </>
            )
          } )}
        </TableBody>
      </Table>
      <h2 className="scroll-m-20 font-extrabold tracking-tight lg:text-2xl">Game Properties</h2>
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
            <EditorInput parameter={props.config.game?.gameProperties.serverMaxViewDistance} min={500} max={10000} name="Server Max View Distance" key="gameProperties.serverMaxViewDistance" />
            <TableCell>
              <ResetButton click={() => props.setConfig({...props.config, game: { ...props.config.game, gameProperties: { ...props.config.game?.gameProperties, serverMaxViewDistance: new GameProperties().serverMaxViewDistance } }})} />
              <HelpButton parameterName="serverMaxViewDistance" />
            </TableCell>
          </TableRow>
          <TableRow>
            <EditorInput parameter={props.config.game?.gameProperties.serverMinGrassDistance} min={0} max={150} name="Server Min Grass Distance" key="gameProperties.serverMinGrassDistance" />
            <TableCell>
              <ResetButton click={() => props.setConfig({...props.config, game: { ...props.config.game, gameProperties: { ...props.config.game?.gameProperties, serverMinGrassDistance: new GameProperties().serverMinGrassDistance } }})} />
              <HelpButton parameterName="serverMinGrassDistance" />
            </TableCell>
          </TableRow>
          <TableRow>
            <EditorInput parameter={props.config.game?.gameProperties.networkViewDistance} min={500} max={5000} name="Network View Distance" key="gameProperties.networkViewDistance" />
            <TableCell>
              <ResetButton click={() => props.setConfig({...props.config, game: { ...props.config.game, gameProperties: { ...props.config.game?.gameProperties, networkViewDistance: new GameProperties().networkViewDistance } }})} />
              <HelpButton parameterName="networkViewDistance" />
            </TableCell>
          </TableRow>
          <TableRow>
            <SwitchInput parameter={props.config.game?.gameProperties.disableThirdPerson} name="Disable Third Person" key="gameProperties.disableThirdPerson" />
            <TableCell>
              <ResetButton click={() => props.setConfig({...props.config, game: { ...props.config.game, gameProperties: { ...props.config.game?.gameProperties, disableThirdPerson: new GameProperties().disableThirdPerson } }})} />
              <HelpButton parameterName="disableThirdPerson" />
            </TableCell>
          </TableRow>
          <TableRow>
            <SwitchInput parameter={props.config.game?.gameProperties.fastValidation} name="Fast Validation" key="gameProperties.fastValidation" />
            <TableCell>
              <ResetButton click={() => props.setConfig({...props.config, game: { ...props.config.game, gameProperties: { ...props.config.game?.gameProperties, fastValidation: new GameProperties().fastValidation } }})} />
              <HelpButton parameterName="fastValidation" />
            </TableCell>
          </TableRow>
          <TableRow>
            <SwitchInput parameter={props.config.game?.gameProperties.battlEye} name="BattleEye" key="gameProperties.battlEye" />
            <TableCell>
              <ResetButton click={() => props.setConfig({...props.config, game: { ...props.config.game, gameProperties: { ...props.config.game?.gameProperties, battlEye: new GameProperties().battlEye } }})} />
              <HelpButton parameterName="battlEye" />
            </TableCell>
          </TableRow>
          <TableRow>
            <SwitchInput parameter={props.config.game?.gameProperties.VONDisableUI} name="VON Disable UI" key="gameProperties.VONDisableUI" />
            <TableCell>
              <ResetButton click={() => props.setConfig({...props.config, game: { ...props.config.game, gameProperties: { ...props.config.game?.gameProperties, VONDisableUI: new GameProperties().VONDisableUI } }})} />
              <HelpButton parameterName="VONDisableUI" />
            </TableCell>
          </TableRow>
          <TableRow>
            <SwitchInput parameter={props.config.game?.gameProperties.VONDisableDirectSpeechUI} name="VON Disable Direct Speech UI" key="gameProperties.VONDisableDirectSpeechUI" />
            <TableCell>
              <ResetButton click={() => props.setConfig({...props.config, game: { ...props.config.game, gameProperties: { ...props.config.game?.gameProperties, VONDisableDirectSpeechUI: new GameProperties().VONDisableDirectSpeechUI } }})} />
              <HelpButton parameterName="VONDisableDirectSpeechUI" />
            </TableCell>
          </TableRow>
          <TableRow>
            <SwitchInput parameter={props.config.game?.gameProperties.VONCanTransmitCrossFaction} name="VON Can Transmit Cross Faction" key="gameProperties.VONCanTransmitCrossFaction" />
            <TableCell>
              <ResetButton click={() => props.setConfig({...props.config, game: { ...props.config.game, gameProperties: { ...props.config.game?.gameProperties, VONCanTransmitCrossFaction: new GameProperties().VONCanTransmitCrossFaction } }})} />
              <HelpButton parameterName="VONCanTransmitCrossFaction" />
            </TableCell>
          </TableRow>
          <TableRow>
            <EditorInput parameter={props.config.game?.gameProperties.missionHeader.toString()} name="Mission Header" key="gameProperties.missionHeader" />
            <TableCell>
              <ResetButton click={() => props.setConfig({...props.config, game: { ...props.config.game, gameProperties: { ...props.config.game?.gameProperties, missionHeader: new GameProperties().missionHeader } }})} />
              <HelpButton parameterName="missionHeader" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <h2 className="scroll-m-20 font-extrabold tracking-tight lg:text-2xl">Mods</h2>
      <Table>
        <TableCaption>
          <Button onClick={() => props.handleDownload()}>Download {props.fileName}</Button>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Value</TableHead>
            <TableHead>Action(s)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.config.game?.admins.map( ( admin, index ) =>
          {
            return (
              <>
                <EditorInput key={index.toString()} parameter={admin} />
                <TableCell>
                  <HelpButton parameterName="mods" />
                </TableCell>
              </>
            )
          } )}
        </TableBody>
      </Table>
    </>
  );

}
