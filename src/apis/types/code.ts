type LocationType = {
  codeFormat: string;
  codeName: string;
  codeSequenceKey: string;
  codeValue: string;
  codeValueDes: null | string;
};
export type ApiCodeArea = Array<{ parent: LocationType; child: LocationType[] }>;
