import { Observable } from 'rxjs';

export enum DispositionTypes {
  MISSED = 'MISSED',
  CANCELLED = 'CANCELLED',
  INITIATED = 'INITIATED',
}

export enum DirectionTypes {
  INCOMING = 'INCOMING',
  OUTGOING = 'OUTGOING',
}

export type SessionTypes = 'SPARK' | 'BROADWORKS';

export enum CH_STORAGE_KEYS {
  CH_ERROR_LIST_MSG = 'chListErrorMsg',
}

export enum SESSION_TYPES {
  CMR = 'CMR',
  SPARK = 'SPARK',
  SPACEMEETING = 'SPACEMEETING',
  EVENTCENTERMEETING = 'EVENTCENTERMEETING'
}

export enum CALLING_SPECIFIC_REASON {
  CALLQUEUE = 'CALLQUEUE',
  HUNTGROUP = 'HUNTGROUP',
  BUSY = 'BUSY',
  NOANSWER = 'NOANSWER',
  UNAVAILABLE = 'UNAVAILABLE',
  UNCONDITIONAL = 'UNCONDITIONAL',
  TIMEOFDAY = 'TIMEOFDAY'
}
export interface ISDKCallHistoryRecord {
  id: string;
  url?: string;
  sessionId?: string;
  sessionType?: SessionTypes;
  startTime?: string;
  endTime?: string;
  durationSecs?: number;
  durationSeconds?: number;
  joinedDurationSeconds?: number;
  participantCount?: number;
  direction: DirectionTypes;
  disposition: DispositionTypes;
  self?: {
    id: string;
    name: string;
    phoneNumber?: string;
    incomingCallProtocols?: unknown[];
  };
  other: {
    id: string;
    name: string;
    phoneNumber?: string;
    isPrivate?: boolean;
    callbackAddress: string;
  };
  links: {
    callbackAddress: string;
    conversationUrl: string;
    locusUrl?: string;
  };
  isSelected?: boolean;
  isDeleted?: boolean;
  isPMR?: boolean;
  isRead?: boolean;
  correlationIds?: unknown[];
}

export type ICallHistoryRecords = {
  lastUpdated?: string;
  items?: Record<string, ICallHistoryRecord>;
};

export interface ICallHistoryRecord {
  id: string;
  name: string;
  direction?: DirectionTypes;
  disposition?: DispositionTypes;
  startTime?: string;
  endTime?: string;
  sessionType?: string;
  phoneNumber?: string;
  callbackAddress?: string;
  isSelected?: boolean;
  durationSeconds?: number;
  callingSpecific?: string;
  isRead?: boolean;
  sessionId?: string;
}
export interface ICallHistoryAdapter {
  refresh(ID?: string): void;

  getAll(ID?: string): Observable<ICallHistoryRecord[]>;

  getOne?(ID?: string): Observable<ICallHistoryRecord>;

  updateMissedCalls(endTimeSessionIds: EndTimeSessionId[]): Observable<UpdateMissedCallsResponse>
}

export enum SORT {
  ASC = 'ASC',
  DESC = 'DESC',
  DEFAULT = 'DESC',
}

export enum SORT_BY {
  END_TIME = 'endTime',
  DEFAULT = 'endTime',
  START_TIME = 'startTime',
}

export enum DATE {
  WEEK = 7,
  MONTH = 30,
  DEFAULT = 7,
}

export enum LIMIT {
  DEFAULT = 100,
}

export interface ICallbackInfo {
  callbackAddress: string;
  callbackType: string;
}

export interface ISelf {
  id: string;
  name: string;
  incomingCallProtocols: any[];
  callbackInfo: ICallbackInfo;
}

export interface IOther {
  phoneNumber: string;
  id: string;
  name: string;
  isPrivate: boolean;
  callbackAddress: string;
}

export interface ILinks {
  locusUrl: string;
  callbackAddress: string;
}
export interface ICallingSpecifics {
  redirectionDetails?: {
    phoneNumber?: string;
    name?: string;
    reason: string;
    userId?: string;
    isPrivate: boolean;
    sipUrl?:string;
  };
}

export interface IUserSession {
  id: string;
  durationSecs: number;
  self: ISelf;
  url: string;
  sessionId: string;
  sessionType: string;
  startTime: string;
  endTime: string;
  direction: string;
  disposition: string;
  other: IOther;
  durationSeconds: number;
  joinedDurationSeconds: number;
  participantCount: number;
  links: ILinks;
  isDeleted: boolean;
  isPMR: boolean;
  correlationIds: string[];
  callingSpecifics?: ICallingSpecifics;
  isRead?: boolean;
}

export interface IUserSessionData {
  userSessions: IUserSession[];
}
export interface IWebexCallHistoryResponse {
  statusCode: number;
  data: IUserSessionData;
  message: string;
}

export interface EndTimeSessionId {
  endTime: string;
  sessionId: string;
}

export interface UpdateMissedCallsResponse {
  statusCode: number;
  data: {
    data?: string;
    error?: string;
  }
  message: string;
}