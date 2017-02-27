"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const platform_browser_1 = require('@angular/platform-browser');
const app_routing_module_1 = require('./app-routing.module');
const groups_component_1 = require('./tabs/groups/groups.component');
const lights_component_1 = require('./tabs/lights/lights.component');
const plugs_component_1 = require('./tabs/plugs/plugs.component');
const scenes_component_1 = require('./tabs/scenes/scenes.component');
const schedules_component_1 = require('./tabs/schedules/schedules.component');
const sensors_component_1 = require('./tabs/sensors/sensors.component');
const http_1 = require('@angular/http');
const app_component_1 = require('./app.component');
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, http_1.HttpModule],
        declarations: [
            app_component_1.AppComponent,
            groups_component_1.GroupsComponent,
            lights_component_1.LightsComponent,
            plugs_component_1.PlugsComponent,
            scenes_component_1.ScenesComponent,
            schedules_component_1.SchedulesComponent,
            sensors_component_1.SensorsComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
