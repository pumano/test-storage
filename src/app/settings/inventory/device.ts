export class Device {
  _id?: string;
  manufacturer: string;
  model: string;
  os: string;
  osVersion: string;
  type: DeviceType;
  location?: string;
  hostname?: string;
  title?: string;
  description?: string;
  inventoryId?: string;
  sku?: string;
  assignedTo: Array<string>; // User id
}

export enum DeviceType {
  MOBILE,
  TABLET,
  SERVER,
  HARDWARE,
  VM,
  CONTAINER
}