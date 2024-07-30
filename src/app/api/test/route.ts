import { CONFIG_DB } from '@/constant';
import ggAuth from '@/lib/googlesheet/jwtAuth';
import { GoogleSpreadsheet } from 'google-spreadsheet';

export async function GET() {
  try {
    // ID = 1mTbGaZqqKQYbUiz6foDbq-Qv2uf1R8cLZebeTD3Dmxw
    const serviceAccountAuth = ggAuth;
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID ?? '', serviceAccountAuth);
    await doc.loadInfo(); // loads document properties and worksheets

    const sheet = doc.sheetsByTitle['General']; // the first sheet
    await sheet.loadCells(CONFIG_DB.APP_DB_RANGE);
    console.log('sheet', Object.keys(doc.sheetsByTitle));

    return Response.json({
      appURL: sheet.getCellByA1(CONFIG_DB.APP_URL).value,
      appName: sheet.getCellByA1(CONFIG_DB.APP_NAME).value,
      appDescription: sheet.getCellByA1(CONFIG_DB.APP_DESCRIPTION).value,
      appLogo: sheet.getCellByA1(CONFIG_DB.APP_LOGO).value,
      appFavicon: sheet.getCellByA1(CONFIG_DB.APP_FAVICON).value,
      appPrimaryColor1: sheet.getCellByA1(CONFIG_DB.APP_PRIMARY_COLOR_1).value,
      appPrimaryColor2: sheet.getCellByA1(CONFIG_DB.APP_PRIMARY_COLOR_2).value,
      appPhone: sheet.getCellByA1(CONFIG_DB.APP_PHONE).value,
      appEmail: sheet.getCellByA1(CONFIG_DB.APP_EMAIL).value,
      appSocialFacebook: sheet.getCellByA1(CONFIG_DB.APP_SOCIAL_FACEBOOK).value,
      appSocialInstagram: sheet.getCellByA1(CONFIG_DB.APP_SOCIAL_INSTAGRAM).value
    });
  } catch (error) {
    return Response.json({ Error: error });
  }
}
