import { Observable } from "rxjs";

export interface IToggleSetting {
    enabled: boolean;
    ringSplashEnabled?: boolean;
};

export interface Ialways {
    enabled: boolean;
    ringReminderEnabled?: boolean;
    destinationVoicemailEnabled?: boolean;
    destination?: string;
}

export interface Ibusy {
    enabled: boolean;
    destinationVoicemailEnabled?: boolean;
    destination?: string;
}

export interface InoAnswer {
    enabled: boolean;
    destinationVoicemailEnabled?: boolean;
    destination?: string;
}
export interface IcallForwardDetails {
    always?: Ialways;
    busy?: Ibusy;
    noAnswer?: InoAnswer;
}

export interface ICallForwardSetting {
    callForwarding?: IcallForwardDetails;
    businessContinuity?: {
        enabled: boolean;
        destinationVoicemailEnabled?: boolean;
        destination?: string;
    };
};

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
};

export interface ICallSettingsData {
    callSetting?: ICallForwardSetting;
    error?: string;
}

export interface ICallSettingResponse {
    statusCode?: number;
    data?: ICallSettingsData;
    message?: string;
};

export interface ICallSettingsAdapter {
    getCallForwardSettings(): Observable<ICallForwardSetting>;
}