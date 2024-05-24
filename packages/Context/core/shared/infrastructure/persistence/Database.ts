export interface Database {

  close: () => Promise<void>

  connect: () => Promise<void>

}
