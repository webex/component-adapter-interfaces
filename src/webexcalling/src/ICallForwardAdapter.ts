import { Observable } from "rxjs";

export interface IToggleSetting {
    enabled: boolean;
    ringSplashEnabled?: boolean;
};

export interface IAlways {
    enabled: boolean;
    ringReminderEnabled?: boolean;
    destinationVoicemailEnabled?: boolean;
    destination?: string;
}

export interface IBusy {
    enabled: boolean;
    destinationVoicemailEnabled?: boolean;
    destination?: string;
}

export interface INoAnswer {
    enabled: boolean;
    destinationVoicemailEnabled?: boolean;
    destination?: string;
}
export interface ICallForwardDetails {
    always?: IAlways;
    busy?: IBusy;
    noAnswer?: INoAnswer;
}

export interface ICallForwardSetting {
    callForwarding?: ICallForwardDetails;
    businessContinuity?: {
        enabled: boolean;
        destinationVoicemailEnabled?: boolean;
        destination?: string;
    };
};
export interface ICallSettingsData {
    callSetting?: ICallForwardSetting;
    error?: string;
}
export interface ICallForwardSettingResponse {
    statusCode?: number;
    data?: ICallSettingsData;
    message?: string;
}

export interface IVoicemailSetting {
    enabled: boolean;
    sendAllCalls: {
        enabled: boolean;
    };
    sendBusyCalls: {
        enabled: boolean;
        greeting?: string;
        greetingUploaded?: boolean;
    };
    sendUnansweredCalls: {
        enabled: boolean;
        greeting?: string;
        greetingUploaded?: boolean;
        numberOfRings: number;
        systemMaxNumberOfRings?: number;
    };
    notifications: {
        enabled: boolean;
        destination?: string;
    };
    transferToNumber?: {
        enabled: boolean;
        destination: string;
    };
    emailCopyOfMessage: {
        enabled: boolean;
        emailId?: string;
    };
    messageStorage: {
        mwiEnabled: boolean;
        storageType: string;
        externalEmail?: string;
    };
    faxMessage?: {
        enabled: boolean;
        phoneNumber?: string;
        extension?: string;
    };
    voiceMessageForwardingEnabled?: boolean;
}
export interface IVoicemailSettingsData {
    callSetting?: IVoicemailSetting;
    error?: string;
}
export interface IVoicemailSettingsResponse {
    statusCode?: number;
    data?: IVoicemailSettingsData;
    message?: string;
}

export interface ICallForwardSettingValueResponse {
    statusCode?: number;
    data?: {
        callSetting: CallForwardAlwaysSetting;
    };
    message?: string;
}

export type CallForwardAlwaysSetting = {
    enabled: boolean;
    ringReminderEnabled?: boolean;
    destinationVoicemailEnabled?: boolean;
    destination?: string;
  };

  /* this interface contains callforward and attendant Console */
export interface ICallSettingsAdapter {
    refreshCallForward(): void;
    getCallForwardSettings(): Observable<string>;
    checkAttendantConsoleFeatureToggle(): Observable<boolean>;
    checkCXEssentailsFeature(): Observable<boolean>;
}
//# sourceMappingURL=ICallForwardAdapter.d.ts.map
