export class SerialportDto {
  constructor(data: Partial<SerialportDto>) {
    if (data.path) this.path = data.path;
    if (data.friendlyName) this.friendlyName = data.friendlyName;
    if (data.vendorId) this.vendorId = data.vendorId
  }

  vendorId: string;
  path: string;
  friendlyName: String;
}
