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
}

export interface ICallHistoryAdapter {
  refresh(ID?: string): void;

  getAll(ID?: string): Observable<ICallHistoryRecord[]>;

  getOne?(ID?: string): Observable<ICallHistoryRecord>;
}
