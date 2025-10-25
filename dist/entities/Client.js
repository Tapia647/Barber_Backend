var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Collection, Entity, OneToMany, PrimaryKey, Property, Cascade } from "@mikro-orm/core";
import { Appointment } from "./Appointment.js";
export let Client = class Client {
    constructor() {
        this.appointments = new Collection(this);
    }
};
__decorate([
    OneToMany(() => Appointment, (appointment) => appointment.client, { cascade: [Cascade.ALL], }),
    __metadata("design:type", Object)
], Client.prototype, "appointments", void 0);
__decorate([
    PrimaryKey({ autoincrement: true }),
    __metadata("design:type", Number)
], Client.prototype, "IDclient", void 0);
__decorate([
    Property(),
    __metadata("design:type", String)
], Client.prototype, "name", void 0);
__decorate([
    Property({ type: 'bigint' }),
    __metadata("design:type", Number)
], Client.prototype, "phone", void 0);
__decorate([
    Property(),
    __metadata("design:type", String)
], Client.prototype, "email", void 0);
Client = __decorate([
    Entity()
], Client);
//# sourceMappingURL=Client.js.map