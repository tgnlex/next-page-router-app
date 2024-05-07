type ResMsg = {
  message: string;
  status?: number;
}
type ResData = {
  data: string;
}
type Query = {
  id?: string;
  name?: string;
}

type ErrorType = {
  message: String,
  statusCode: number;
}
export type {ErrorType, Query, ResData, ResMsg}