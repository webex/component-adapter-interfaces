import { Observable } from 'rxjs';

export interface IWebexVoicemail {
  id: string;
  name: string;
  address: string;
  unread: boolean;
  date: string;
  duration: number;
}

export enum RESPONSE_STATUS {
  STATUSCODE_200 = 200,
  SUCCESS = 'SUCCESS',
}

export enum VM_STORAGE_KEYS {
  VOICEMAIL_DATA_MAP = 'voicemailDataMap',
  VOICEMAIL_ID_MAP = 'voicemailIdMap'
}

export enum VOICEMAIL_LIMIT {
  OFFSET = 0,
  OFFSET_LIMIT = 25,
}
export enum IDB_STORAGE {
  DB_NAME = 'VoiceMessageDB',
  STORE_NAME = 'voiceMessageStore',
  MAX_ITEMS = 5,
  READ_WRITE = 'readwrite',
  IDB_EXIST = 'indexedDB',
  DB_VERSION = 1
}
export interface IDuration {
  $: string;
}

export interface IName {
  $: string;
}

export interface IUserId {
  $: string;
}

export interface IAddress {
  $: string;
}
export interface ICallingPartyInfo {
  name: IName;
  userId: IUserId;
  address: IAddress;
}

export interface ITime {
  $: string;
}

export interface IMessageId {
  $: string;
}

export interface IVoiceMailList {
  duration: IDuration;
  callingPartyInfo: ICallingPartyInfo;
  time: ITime;
  messageId: IMessageId;
  read: string;
}

export interface IVoiceMailData {
  voicemailList: IVoiceMailList[];
}

export interface IVoiceMailResponse {
  statusCode: number;
  data: IVoiceMailData;
  message: string;
}

export interface IVoiceMailDeleteData { }

export interface IVoiceMailDeleteResponse {
  statusCode: number;
  data: IVoiceMailDeleteData;
  message: string;
}

export interface IVoiceMessageContent {
  type: string;
  content: string;
}
export interface IVoiceMessageContentData {
  voicemailContent: IVoiceMessageContent;
}
export interface IVoiceMessageContentResponse {
  statusCode: number;
  data: IVoiceMessageContentData;
  message: string;
  voiceMessageId?: string;
  createdAt?: string;
}

export interface IVoiceMailReadData { }
export interface IVoiceMailReadResponse {
  statusCode: number;
  data: IVoiceMailReadData;
  message: string;
}

export interface IVoicemailTranscript {
  voicemailTranscript:string
}

export interface IVoiceMailTranscriptMessage {
  statusCode: number;
  data: IVoicemailTranscript;
  message: string;
}
export interface IVoicemailAdapter {
  refresh(): void;

  getAll(): Observable<IWebexVoicemail[]>;

  deleteVoicemail(ID: string): Observable<IVoiceMailDeleteResponse>;

  markVoicemailRead(ID: string): Observable<IVoiceMailReadResponse>;

  getVoiceMessage(ID: string): Observable<IVoiceMessageContentResponse>;

  getVMTranscript(ID: string): Observable<IVoiceMailTranscriptMessage>;

  getWebexCallingBackend(): Observable<boolean>;
}
