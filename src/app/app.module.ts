import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputMaskModule} from 'primeng/inputmask';
import {InputTextModule} from 'primeng/inputtext';
import { AppRoutingModule } from './app-routing.module';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CheckboxModule} from 'primeng/checkbox';
import {InputNumberModule} from 'primeng/inputnumber';
import {KnobModule} from 'primeng/knob';
import {KeyFilterModule} from 'primeng/keyfilter';
import {ListboxModule} from 'primeng/listbox';
import {PasswordModule} from 'primeng/password';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RatingModule} from 'primeng/rating';
import {SliderModule} from 'primeng/slider';
import {SelectButtonModule} from 'primeng/selectbutton';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {GMapModule} from 'primeng/gmap';
import {TimelineModule} from 'primeng/timeline';
import {AccordionModule} from 'primeng/accordion';
import {CardModule} from 'primeng/card';
import {DividerModule} from 'primeng/divider';
import {FieldsetModule} from 'primeng/fieldset';
import {PanelModule} from 'primeng/panel';
import {SplitterModule} from 'primeng/splitter';

import { AppComponent } from './app.component';
import { InputMaskComponent } from './components/input-mask/input-mask.component';
import { InputSwitchComponent } from './components/input-switch/input-switch.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { InputNumberComponent } from './components/input-number/input-number.component';
import { KnobComponent } from './components/knob/knob.component';
import { KeyFilterComponent } from './components/key-filter/key-filter.component';
import { ListBoxComponent } from './components/list-box/list-box.component';
import { PasswordComponent } from './components/password/password.component';
import { RatingComponent } from './components/rating/rating.component';
import { SelectButtonComponent } from './components/select-button/select-button.component';
import { ButtonComponent } from './components/button/button.component';
import {ButtonModule} from 'primeng/button';
import { OrgChartComponent } from './components/org-chart/org-chart.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { CardComponent } from './components/card/card.component';
import { DividerComponent } from './components/divider/divider.component';
import { FieldsetComponent } from './components/fieldset/fieldset.component';
import { PanelComponent } from './components/panel/panel.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogComponent } from './components/dialog/dialog.component';
import {DialogModule} from 'primeng/dialog';



import {SidebarModule} from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TabViewModule} from 'primeng/tabview';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import { TableComponent } from './table/table.component';
import {CalendarModule} from 'primeng/calendar';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {MenubarModule} from 'primeng/menubar';
import { LeftTableComponent } from './left-table/left-table.component';
import { RightTableComponent } from './right-table/right-table.component';


@NgModule({
  declarations: [
    AppComponent,
    InputMaskComponent,
    InputSwitchComponent,
    InputTextComponent,
    CheckboxComponent,
    InputNumberComponent,
    KnobComponent,
    KeyFilterComponent,
    ListBoxComponent,
    PasswordComponent,
    RatingComponent,
    SelectButtonComponent,
    ButtonComponent,
    OrgChartComponent,
    AccordionComponent,
    CardComponent,
    DividerComponent,
    FieldsetComponent,
    PanelComponent,
    ConfirmDialogComponent,
    DialogComponent,
    TableComponent,
    LeftTableComponent,
    RightTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InputMaskModule,
    InputTextModule,
    InputSwitchModule,
    InputTextareaModule,
    CheckboxModule,
    InputNumberModule,
    KnobModule,
    KeyFilterModule,
    ListboxModule,
    PasswordModule,
    RadioButtonModule,
    RatingModule,
    SliderModule,
    SelectButtonModule,
    ToggleButtonModule,
    ButtonModule,
    GMapModule,
    TimelineModule,
    AccordionModule,
    CardModule,
    DividerModule,
    FieldsetModule,
    PanelModule,
    SplitterModule,
    MessagesModule,
    ConfirmDialogModule,
    DialogModule,
    SidebarModule,
    BrowserAnimationsModule,
    TabViewModule,
    TableModule,
    DropdownModule,
    CalendarModule,
    BreadcrumbModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
