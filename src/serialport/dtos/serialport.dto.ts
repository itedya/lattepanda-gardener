export class SerialportDto {
  constructor(data: Partial<SerialportDto>) {
    this.path = data.path;
    this.friendlyName = data.friendlyName;
  }

  path: String;
  friendlyName: String;
}
