type LocationType = {
  locationkey: number;
  locationname: string;
  parent: string;
};
export type ApiCodeArea = {
  child: LocationType[];
  parent: LocationType[];
};
