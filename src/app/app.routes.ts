import { Routes } from '@angular/router';
import { HomeComponent } from './+pages/home/home.component';
import { ComputerComponent } from './+pages/computer/computer.component';
import { LaptopComponent } from './+pages/laptop/laptop.component';
import { PhoneComponent } from './+pages/phone/phone.component';
import { OfficeMachinesComponent } from './+pages/office-machines/office-machines.component';
import { ClockComponent } from './+pages/clock/clock.component';
import { GameConsoleComponent } from './+pages/game-console/game-console.component';
import { AudioVisualComponent } from './+pages/audio-visual/audio-visual.component';
import { ElectricalAppliancesComponent } from './+pages/electrical-appliances/electrical-appliances.component';
import { GamingToolsComponent } from './+pages/gaming-tools/gaming-tools.component';

export const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "computer", component: ComputerComponent },
  { path: "laptop", component: LaptopComponent },
  { path: "phone", component: PhoneComponent },
  { path: "office-machines", component: OfficeMachinesComponent },
  { path: "clock", component: ClockComponent },
  { path: "game-console", component: GameConsoleComponent },
  { path: "audio-visual", component: AudioVisualComponent },
  { path: "electrical-appliances", component: ElectricalAppliancesComponent },
  { path: "game-tools", component: GamingToolsComponent }
];
