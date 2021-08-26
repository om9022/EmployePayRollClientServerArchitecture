function stringDate(startDate) {
  date = new Date(startDate)
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date == undefined
    ? "undefined"
    : date.toLocaleDateString("en-us", options);
}

function checkName(name) {
  let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
  if (!nameRegex.test(name)) {
    throw "Name is incorrect";
  }
}

function checkDate(startDate){
  let now = new Date()
  let date = new Date(startDate)
  if (date > now){
    throw 'Date canot be future date'
  }
  var diff = Math.abs(now.getTime() - date.getTime())
  if (diff / (1000*60*60*24) > 30 ) {
    throw "Date cannot be beyond 30 days"
  }
}