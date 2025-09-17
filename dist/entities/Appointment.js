var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryKey, Property, ManyToOne, OneToOne } from "@mikro-orm/core";
import { Client } from "./Client.js";
import { Payment } from "./Payment.js";
export var AppointmentState;
(function (AppointmentState) {
    AppointmentState["Pending"] = "pending";
    AppointmentState["Confirmed"] = "confirmed";
    AppointmentState["Completed"] = "completed";
    AppointmentState["Cancelled"] = "cancelled";
})(AppointmentState || (AppointmentState = {}));
export let Appointment = class Appointment {
    constructor() {
        this.state = AppointmentState.Pending;
    }
};
__decorate([
    PrimaryKey(),
    __metadata("design:type", Number)
], Appointment.prototype, "IDappointment", void 0);
__decorate([
    ManyToOne(() => Client, { nullable: false }),
    __metadata("design:type", Object)
], Appointment.prototype, "client", void 0);
__decorate([
    OneToOne(() => Payment),
    __metadata("design:type", Payment)
], Appointment.prototype, "payment", void 0);
__decorate([
    Property({ nullable: false }),
    __metadata("design:type", Date)
], Appointment.prototype, "dateAppointment", void 0);
__decorate([
    Property({ nullable: false }),
    __metadata("design:type", String)
], Appointment.prototype, "time", void 0);
__decorate([
    Property(),
    __metadata("design:type", String)
], Appointment.prototype, "state", void 0);
Appointment = __decorate([
    Entity()
], Appointment);
//# sourceMappingURL=Appointment.js.map