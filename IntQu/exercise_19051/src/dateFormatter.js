export const format = (dateToFormatTimeMillis, systemDateTimeMillis) => {
  let result = '';
  let dateToFormatTime = new Date(dateToFormatTimeMillis);
  let formatDates =   dateToFormatTime.getDate() + "/" + (dateToFormatTime.getMonth() + 1)  +"/" + dateToFormatTime.getFullYear();
  let systemDateTime = new Date(systemDateTimeMillis);
  let systemDates = systemDateTime.getDate() + "/" + (systemDateTime.getMonth() + 1)  +"/" + systemDateTime.getFullYear();

  if(formatDates == systemDates){
    result = 'TODAY';
  }else{
    result = formatDates;
  }

  return result;
};

console.log(format())
