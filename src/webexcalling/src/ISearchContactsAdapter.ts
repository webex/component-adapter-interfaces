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
    getContactById?(userId: string): Promise<IWebexIntContact | void>;
}