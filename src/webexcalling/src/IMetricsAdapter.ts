export interface IMetricsData {
  appName: string;
  appSessionId: string;
  entityId: string;
  sessionId: string;
  userObjectId?: string;
  metricEvent: string;
  loginHint?: string;
  hostClientType: string;
  tid?: string;
  numberOfSpeedDials?: string;
  integrationName: string;
  messageId?: string;
  responseStatus?: string;
  callingBackend: string;
  contentSize?: string;
  executionTime?: string;
}
export interface IUserData {
  metricEvent: string;
  messageId?: string;
  integrationName: INTEGRATION;
  responseStatus?: string;
  contentSize?: string;
  executionTime?: string;
  client_timestamp?: string;
  trackingId?: string;
  key?: string;
  value?: string;
}

export enum METRIC {
  BUSINESS = 'business',
}

export enum INTEGRATION {
  MSTEAMS = 'msteams',
}

export enum APP {
  WEBEXTEAMS = 'webexteams',
}

export enum CALLING_BACKEND {
  WEBEX_USER = 'webex_userCallingBackend',
}

export interface IMetricsAdaptor {}
