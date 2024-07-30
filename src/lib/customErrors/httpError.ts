/**
 * When the API response with non-success status code, throw this custom error object along with status code, message and data if exist
 */

import { ResponseBase } from '@/types/base.type';

export class HttpError<T> extends Error {
  private _statusCode: number;
  private _data: T | null | undefined;

  constructor({ statusCode, message, data }: ResponseBase<T>) {
    super(message);
    this.name = 'HttpError';
    this._statusCode = statusCode;
    this._data = data;
  }

  public get statusCode() {
    return this._statusCode;
  }

  public get data() {
    return this._data;
  }
}
