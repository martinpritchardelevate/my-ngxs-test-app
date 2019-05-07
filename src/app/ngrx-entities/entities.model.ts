export class EntitiesStateModel<T extends { id: string }> {
  entities: { [id: string]: T };
  ids: string[];
  paging: ApiCollectionPagingInfo;
}

export class ApiCollectionPagingInfo {

  constructor(
    public totalResults = 0,
    public pages = 1,
    public pageNumber = 1) {
}

  // public static parse(metaData: ApiMetaData | any) {
  public static parse(metaData: any) {
      return new ApiCollectionPagingInfo(
          metaData.totalResults,
          metaData.pages,
          metaData.pageNumber
      );
  }

}

export class ApiCollection<T> {
  public paging: ApiCollectionPagingInfo = new ApiCollectionPagingInfo();
  public items: Array<T> = [];
}
