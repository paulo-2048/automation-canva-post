require('dotenv').config();
const { GoogleSpreadsheet } = require('google-spreadsheet');


const docId = '1Iz52ArdAWbtX6xLeATbRt9FwxsnJTyTUvOFnybr_xcM'
const doc = new GoogleSpreadsheet(docId);
const date_now = new Date

async function acessSheet(){  
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, '\n'),
  });

  await doc.loadInfo(); // loads document properties and worksheets  
}

exports.sendInformation = async function sendInformation(nm, des, cat){
  await acessSheet()

  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title];
  await sheet.addRow({
  name:nm,
  description:des,
  categories:cat,
  date:`${date_now.getDate()}/${date_now.getMonth()}/${date_now.getFullYear()}`
  })
}

exports.getInformations = async function (){
  await acessSheet()

  const sheet = await doc.sheetsByIndex[0]
  let data_sheet = await sheet.getRows()
  return data_sheet

}