import { CONFIG_HOMEPAGE_SHEET } from '@/constant';
import ggAuth from '@/lib/googlesheet/jwtAuth';
import { type Carousel } from '@/types/home-page.type';
import { GoogleSpreadsheet } from 'google-spreadsheet';

export async function GET() {
  try {
    const serviceAccountAuth = ggAuth;
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID ?? '', serviceAccountAuth);
    await doc.loadInfo(); // loads document properties and worksheets
    const sheet = doc.sheetsByTitle['Trang chủ | '];

    await sheet.loadCells(CONFIG_HOMEPAGE_SHEET.HOMEPAGE_RANGE);
    // const rows = await sheet.getRows();
    // console.log('getCellsInRange',);
    sheet.getCellsInRange('A17:C21').then(a => console.log('getCellsInRange', a));
    // console.log(rows[4]);
    const carousel: Carousel[] = [];

    return Response.json(
      {
        statusCode: 200,
        data: {
          slogan: sheet.getCellByA1(CONFIG_HOMEPAGE_SHEET.SLOGAN).value,
          description: sheet.getCellByA1(CONFIG_HOMEPAGE_SHEET.DESCRIPTION).value,
          book_btn: sheet.getCellByA1(CONFIG_HOMEPAGE_SHEET.BOOK_BTN).value,
          carousel
        }
      }
    );
  } catch (error) {
    return Response.json({ errors: 'Something went wrong when get data home page!!!' });
  }
}
