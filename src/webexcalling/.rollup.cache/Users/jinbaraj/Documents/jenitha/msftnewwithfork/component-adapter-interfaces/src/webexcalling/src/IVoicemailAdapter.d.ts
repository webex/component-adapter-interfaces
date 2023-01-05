import { Observable } from 'rxjs';
export interface IWebexVoicemail {
    id: string;
    name: string;
    address: string;
    unread: boolean;
    date: string;
    audioSrc: string;
}
export interface IVoicemailAdapter {
    refresh(): void;
    getAll(): Observable<IWebexVoicemail[]>;
    deleteVoicemail(ID: string): void;
    markVoicemailRead(ID: string): void;
}
//# sourceMappingURL=IVoicemailAdapter.d.ts.map