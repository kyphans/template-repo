export interface IGeneral {
  appURL: string | null;
  appName: string | null;
  appDescription: string | null;
  appLogo: string | null;
  appFavicon: string | null;
  appPrimaryColor1: string | null;
  appPrimaryColor2: string | null;
  appPageProperties: AppPageProperties[];
  appPhone: string | null;
  appEmail: string | null;
  appSocialFacebook: string | null;
  appSocialInstagram: string | null;
}
// enum SheetType: https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/sheets?hl=vi#sheettype
export type SheetType = 'GRID' | 'OBJECT' | 'DATA_SOURCE';

export type AppPageProperties = {
  sheetId: number,
  title: string,
  index: number,
  sheetType: SheetType,
  path: string
}