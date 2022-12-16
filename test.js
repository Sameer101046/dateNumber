 let date1= new Intl.DateTimeFormat("ar-kw").format(new Date());
 console.log(date1)

 let date2= new Intl.DateTimeFormat("zh-sg").format(new Date());
 console.log(date2)

 let date3 = new Intl.DateTimeFormat("ko").format(new Date());
 console.log(date3);
 
 let date4 = new Intl.DateTimeFormat("es-ar").format(new Date());
 console.log(date4)

 let date5 = new Intl.DateTimeFormat("eu").format(new Date());
 console.log(date5);

 let amount = 1000;
 console.log(
    new Intl.NumberFormat("hi", { style: "currency", currency: "INR" }).format(
        amount
    )
  );

  console.log(new Intl.NumberFormat("ar-kw",{style:"currency", currency:"RYL"}).format(amount));

  console.log(new Intl.NumberFormat("zh-hk",{style:"currency", currency:"CNY"}).format(amount));

  console.log(new Intl.NumberFormat("tr",{style:"currency", currency:"TRY"}).format(amount));
  console.log(new Intl.NumberFormat("es-mx",{style:"currency",currency:"MXN"}).format(amount));


  let speed = 100;
  console.log(new Intl.NumberFormat("hi", {style:"unit",unit:"kilometer-per-hour"}).format(speed));
  console.log(new Intl.NumberFormat("ar-iq",{style:"unit", unit:"kilometer-per-hour"}).format(speed));
  console.log(new Intl.NumberFormat("en",{style:"unit",unit :"kilometer-per-hour"}).format(speed));
  console.log(new Intl.NumberFormat("zh-hk",{style:"unit",unit :"kilometer-per-hour"}).format(speed));
  console.log(new Intl.NumberFormat("ji",{style:"unit",unit :"kilometer-per-hour"}).format(speed));

  let number1 = 1010;
  console.log(new Intl.NumberFormat("hi",{style:"unit",unit:"liter"}).format(number1));
  console.log(new Intl.NumberFormat("ji",{style:"unit",unit:"liter"}).format(number1));
  console.log(new Intl.NumberFormat("zh-hk",{style:"unit",unit:"liter"}).format(number1));
  console.log(new Intl.NumberFormat("en-bz",{style:"unit",unit:"liter"}).format(number1));
  console.log(new Intl.NumberFormat("th",{style:"unit",unit:"liter"}).format(number1));

  let datePrint= new Date(2025,7,20);
  console.log(new Intl.DateTimeFormat("en-za").format(datePrint));

  let longNumber =1671089631959
  console.log(new Intl.DateTimeFormat("en",{dateStyle:"full",timeStyle:"medium"}).format(longNumber))

  const date = new Date(Date.(2023, 08, 15,));

  // request a weekday along with a long date
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  console.log(new Intl.DateTimeFormat('en', options).format(date));
