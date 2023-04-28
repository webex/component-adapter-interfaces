import { IWebexIntContact } from './shared';

export interface ISearchContactsAdapterSearchInput {
  searchText: string;
}

export interface ISearchContactsAdapterSearchResponse {
  count: number;
  items: {
    [sourceName: string]: IWebexIntContact[];
  };
}

export interface ISearchContactsAdapter {
    search: (
        _: ISearchContactsAdapterSearchInput
    ) => Promise<ISearchContactsAdapterSearchResponse>;

    getSources: () => string[];
    //Optional Method to get Outlook & Dir contacts
    getContactDetailById?(userId: string): Promise<IWebexIntContact | void>;
    getUsersByIds?(userIds: string[]): Promise<IWebexIntContact[]>;
}
