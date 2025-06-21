type ApiCodeChildren = {
  codeFormat: string;
  codeName: string;
  codeSequenceKey: string;
  codeValue: string;
  codeValueDes: null | string;
};
export type ApiCodeArea = Array<{ parent: ApiCodeChildren; child: ApiCodeChildren[] }>;
