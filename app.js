///////////////////////////////////// chapter 21-25/////////////////////////////

////////////////////////////////////// task-1 /////////////////////////////////


// var firstname = prompt("enter your first name");
// var lastname = prompt("enter you last name");
// var fullName = firstname + " " + lastname ; 
// alert("your full name is " + fullName);



////////////////////////////////////// task-2 /////////////////////////////////


// var model = prompt("enter your mobile model");
// var length = model.length;
// document.write("your mobile model is " + model + "<br>");
// document.write("length of string is " + length + "<br>");


////////////////////////////////////// task-3 /////////////////////////////////


// let str = "Pakistani";
// let indexno = str.indexOf("n");
// document.write(str + "<br>");
// document.write(" index no of 'n' is " +indexno);



////////////////////////////////////// task-4 /////////////////////////////////

// let string = "Hello World";
// let indexno = string.lastIndexOf("l");
// document.write(string + "<br>");
// document.write(" index no of last letter 'l' is " +indexno);


////////////////////////////////////// task-5 /////////////////////////////////

// let str = "Pakistani";
// let indexno = str.charAt(3);
// document.write(str + "<br>");
// document.write(" character at index 3 is : " + indexno);


////////////////////////////////////// task-6 /////////////////////////////////


// var firstname = prompt("enter your first name");
// var lastname = prompt("enter you last name");
// var fullName = firstname + " ".concat(lastname); 
// alert("your full name is " + fullName);


////////////////////////////////////// task-7 /////////////////////////////////

// var city = "Hyderabad"
// var replace = city.replace("Hyder","Islam");
// document.write( "City : " + city + "<br>");
// document.write ( "After Replacement : " +replace + "<br>");


////////////////////////////////////// task-8 /////////////////////////////////

// var message = "Ali and Sami are best friends. They play cricket and football together."; 
// var replace = message.replace(/and/g,"&");
// document.write( "message : " + message + "<br>");
// document.write ( "After Replacement : " + replace + "<br>");

////////////////////////////////////// task-9 /////////////////////////////////


// var value1 = "472";
// document.write("Value : " + value1 + "<br>");
// document.write("Type : " + typeof value1 + "<br>");

// var value = Number("472");
// document.write("Value : " + value + "<br>");
// document.write("Type : " + typeof value + "<br>");


////////////////////////////////////// task-10 /////////////////////////////////

// var usr_input = prompt("enter any string")
// var upper_case = usr_input.toUpperCase(); 
// document.write("user input : " + usr_input + "<br>");
// document.write("upper case : " + upper_case + "<br>");


////////////////////////////////////// task-11 /////////////////////////////////

// var usr_input = prompt("enter any string")
// var firstletter = usr_input.slice(0,1);
// var upper_case = firstletter.toUpperCase(); 
// var otherletter = usr_input.slice(1);
// var lower_case = otherletter.toLowerCase();
// var title_case = upper_case + lower_case; 

// document.write("User input : " + usr_input + "<br>");
// document.write("Tittle case : " + title_case + "<br>");

////////////////////////////////////// task-12 /////////////////////////////////

// var num = 35.36 ;
// var convert = num.toString();
// document.write("Number : "  + convert + "<br>" );

// var firstnums = convert.slice(0,2);
// var lastnums = convert.slice(3);
// var remove_dot = firstnums + lastnums ;
// document.write("Result : " + remove_dot );


////////////////////////////////////// task-13 /////////////////////////////////


// username=prompt("Enter username");

// for(let i=0;i<username.length;i++){
// 	if(username.charCodeAt(i)==33 || username.charCodeAt(i)==44||username.charCodeAt(i)==46 ||username.charCodeAt(i)==64){
//   alert("Enter valid username");
//   }
// }

////////////////////////////////////// task-14 /////////////////////////////////

// var a;
// a = ["cake", "apple pie", "cookie", "chips", "patties"];
// var user_demand =prompt("welcome to pak bakery, beauty. what do you want to order sir/mam","your order is");
// var caase = user_demand.toLowerCase();
// var i;
// for( i=0;i<a.length ;i++){

//     if(caase =="cake"||caase=="apple pie"||caase=="cookie"||caase=="chips"||caase=="patties" ){
//   alert( user_demand + " is available at index " + a.indexOf(caase) + " in our bakery ")  
//         break;
// }
// else{
//     alert("we are sorry . " + user_demand + " is not available in our bakery " )
//     break;
// }
// }


////////////////////////////////////// task-15 /////////////////////////////////

// let passwd= prompt("Enter password: ");
// var pattern=/^[a-zA-Z]+[\d]*$/;
// if(passwd.match(pattern) && passwd.length>=6){
// 	alert("Valid password");
// }




////////////////////////////////////// task-16 /////////////////////////////////

// var text = "University of Karachi"
// var string_to_arr = text.split('');

// for(i=0;i<string_to_arr.length;i++){
//     document.write(string_to_arr[i] + "<br>");

// }


////////////////////////////////////// task-17 /////////////////////////////////

// var user = prompt("enter a string")
//     for(var  i=user.length-1 ; i>=0 ; i-- ){
//        alert( user.charAt(i));
//         break;
//     }




////////////////////////////////////// task-18 /////////////////////////////////


// let text= prompt("Enter text");
// var pattern= /(the|The|THE)/g;
// alert(`The occurences are: ${(text.match(pattern)).length}`)




///////////////////////////////////// chapter 26-30 /////////////////////////////


////////////////////////////////////// task-1 /////////////////////////////////

// var num = +prompt("enter any positive integer");
// var round = Math.round(num);
// var ceil = Math.ceil(num);
// var floor =Math.floor(num);
// document.write("Number : " + num + "<br>" )
// document.write("Round Off value : " + round + "<br>" )
// document.write(" Ceil value : " + ceil + "<br>" )
// document.write(" floor value : " + floor + "<br>" )

////////////////////////////////////// task-2 /////////////////////////////////

// var num = +prompt("enter any negative floating point");
// var round = Math.round(num);
// var ceil = Math.ceil(num);
// var floor =Math.floor(num);
// document.write("Number : " + num + "<br>" )
// document.write("Round Off value : " + round + "<br>" )
// document.write(" Ceil value : " + ceil + "<br>" )
// document.write(" floor value : " + floor + "<br>" )

////////////////////////////////////// task-3 /////////////////////////////////

// document.write(Math.abs(-4));


////////////////////////////////////// task-4 /////////////////////////////////

// var dice = Math.random() * 6; 
// var ceil = Math.ceil(dice);
// alert("Dice value is : " + ceil );


////////////////////////////////////// task-5 /////////////////////////////////

// var game = Math.random() * 2; 
// var ceil = Math.ceil(game);

// document.write(ceil  + "<br>" );
// if(ceil === 1){
// document.write("Random Coin Value is : Head " );}
// else{
// document.write("Random Coin Value is : Tails " );
// }


////////////////////////////////////// task-6 /////////////////////////////////


// var dice = Math.random() * 100; 
// var ceil = Math.ceil(dice);
// alert("Random Number Between 1 And 100 is : " + ceil );

////////////////////////////////////// task-7 /////////////////////////////////

// var weight = prompt("enter your weight");
// var String_To_Number = parseFloat(weight);
// document.write("The Weight Of User Is : " + String_To_Number + " Kilograms ");


////////////////////////////////////// task-8 /////////////////////////////////

// var num = + prompt("enter number between 1 to 10 ");
// var ramdom = Math.random()*10;
// var ceil = Math.ceil(ramdom);
// if(ceil === num){
//     alert("CONGRATS YOU ENTER THE WRITE NUMBER");
// }
// else if (num>10){
// alert("PLEASE ENTER A NUMBER BETWEEN 1 TO 10");
// }
// else{
//     alert("TRY AGAIN DUDE");
// }


///////////////////////////////////// chapter 31-34 /////////////////////////////

////////////////////////////////////// task-1 /////////////////////////////////

// var a =new Date();
// document.write(a + "<br>");

////////////////////////////////////// task-2 /////////////////////////////////
// var a = new Date();
// var arr = ["january","february","march","april","may","june","july","august","september",
// "october","november","december"]
// a=a.getMonth();
// alert("current month " + arr[a]);

////////////////////////////////////// task-3  /////////////////////////////////

// var arr =["sun","mon","tue","wed","thu","fri","sat"];
// var now =new Date();
// var the_day = now.getDay();
// var day_name = arr[the_day];
// document.write("today is : " + day_name + "<br>");

////////////////////////////////////// task-4  /////////////////////////////////

// var arr =["sun","mon","tue","wed","thu","fri","sat"];
// var now =new Date();
// var the_day = now.getDay();
// var day_name = arr[the_day];
// if(day_name === "sat" ||  day_name === "sun" ){
//     alert("it's a fun day");
// }

////////////////////////////////////// task-5  /////////////////////////////////

// var current_date = new Date();
//  var a = current_date.getDate();
// //  document.write(a + "<br>");
//  if(a<16){
//      document.write("First Fifteen Of The Month " + "<br>")
//  }
//  else{
//     document.write("Last Fifteen Of The Month " )
// }

////////////////////////////////////// task-6  /////////////////////////////////

// var a = new Date("december 05,2015");
// document.write("Current Date : " + a + "<br>")
// a=a.getTime();
// document.write("Milliseconds since january 1 , 1999 : " + a + "<br>")
// var b = a/(1000*60*60)
// document.write("Seconds since january 1 , 1999 : " + b + "<br>")


////////////////////////////////////// task-7  /////////////////////////////////

// var a =new Date();
// a = a.getHours();
// // document.write(a + "<br>")
// if(a<13){
//     alert("it's AM");
// }
// else{
//     alert("it's PM");
// }


////////////////////////////////////// task-8  /////////////////////////////////

// var later_date = new Date("december 31, 2020");
// alert("Later Date : " + later_date);


////////////////////////////////////// task-9  /////////////////////////////////

// var a =new Date();
// document.write("Current Date : " + a + "<br>");
// var b =new Date("june 18, 2015")
// document.write("First Ramadan Date Of Year 2015 : " + b + "<br>");
// a= a.getTime();
// b=b.getTime();
// var d = a-b;
// var dd = d/(1000*60*60*24);
// dd = Math.floor(dd);
// document.write( dd + " Days Have Passed Since 1st Ramadan,2015 " + "<br>");
// alert( dd + " Days Have Passed Since 1st Ramadan,2015 ");


////////////////////////////////////// task-10  /////////////////////////////////


// var a =new Date("january 01 ,2015");
// var b =new Date("decemberber 05, 2015")
// document.write(b + "<br>");
// a= a.getTime();
// b=b.getTime();
// var d = b-a;
// var dd = d/(1000*60);
// var dd = Math.floor(dd);
// document.write(dd+" seconds had passed since beginning from september 06, 2015" + "<br>");


////////////////////////////////////// task-11  /////////////////////////////////


// var a =new Date();
// document.write("Current Date : " +a + "<br>");
// a.setHours((a.getHours() +1 ) );
// document.write("1 Hour Ago It Was : " + a + "<br>");

////////////////////////////////////// task-12  /////////////////////////////////


// var a =new Date();
// document.write("Current Date : " +a + "<br>");
// a.setFullYear((a.getFullYear() -100 ) );
// document.write("100 Years Back It Was : " + a + "<br>");


////////////////////////////////////// task-13  /////////////////////////////////

// var a =new Date();
// var b =new Date(prompt ('enter your DOB in this format january 01, 1900 ' ));
// document.write("YOUR DOB : " + b + "<br>");
// a= a.getTime();
// var bb=b.getTime();
// var d = a-bb;
// var dd = d/(1000*60*60*24*31*12);
// var dd = Math.floor(dd);
// document.write("your age is : " + dd + "<br>");
// b = b.getFullYear();
// document.write("your year of birth is : " + b + "<br>");

////////////////////////////////////// task-14  /////////////////////////////////

//////////      a     ////////////////////////////

// document.write("<h1><B>K-ELECTRIC BILL</B></h1>" + "<br>");
// var a =new Date();
// var costumer_name = prompt("enter your name");
// document.write("Customer Name : " + costumer_name + "<br>")


//             //////////      b     ////////////////////////////
// var arr = ["january","february","march","april","may","june","july","august","september",
// "october","november","december"]
// var current_month = a.getMonth();
// current_month = arr[current_month];
// document.write("Current Month : " + current_month + "<br>")


//                 //////////      c     ////////////////////////////

// var no_of_units = +prompt("enter your no of units");
// document.write (" Number of units  : " + no_of_units + "<br>")

//                 //////////      d     ////////////////////////////

// var charges_per_units = +prompt("enter your charges per units");
// document.write(" Charges per unit  : " + charges_per_units + "<br>")

//             //////////      e     ////////////////////////////

// var Net_Amount_Payable_Due_Date = no_of_units * charges_per_units;
// document.write("Net Amount Payable (within Due Date) : " + Net_Amount_Payable_Due_Date + "<br>")

//             //////////      f     ////////////////////////////

// var Surcharge = 350;
// document.write("Late Payment Surcharge : " + Surcharge + "<br>");

//             //////////      g     ////////////////////////////

// var Gross_Amount_Payable_after_Due_Date = Net_Amount_Payable_Due_Date + Surcharge ;
// document.write("Gross Amount Payable (after Due Date) : " + Gross_Amount_Payable_after_Due_Date + "<br>");



///////////////////////////////////// chapter 35-38 /////////////////////////////


////////////////////////////////////// task-1 /////////////////////////////////

// function date(){
// var a= new Date();
// alert(a);

// }
// date();
// date();

////////////////////////////////////// task-2 /////////////////////////////////

// function name(a,b){
//     var fullname = a+b;
//     document.write(a+ " "+b +"<br>");

// }
// name("saad","shakil");
// name("hamza","toheed");

////////////////////////////////////// task-3 /////////////////////////////////

// function sum (a,b){
//     var c=a+b;
//     document.write(c+"<br>");
//     return c;
// }
// var d=sum(5,8);

// var dd=sum(15,78);


////////////////////////////////////// task-4 /////////////////////////////////

// function calc(num1,opr,num2){
//     if(opr==="+"){
//         return num1+num2;
//     }
//     else if(opr==="-"){
//         return num1-num2;
//     }else if(opr==="*"){
//          return num1*num2;
//     }else if(opr==="/"){
//         return num1/num2;
//     }else{
//         alert("you enter invalid operator");
//     }


// }
// var a=calc(14,"*",2);
// document.write(a + "<br>");
// var aa=calc(14,"+",12);
// document.write(aa + "<br>");
// var aaa=calc(114,"-",2);
// document.write(aaa + "<br>");
// var aaaa=calc(14,"/",7);
// document.write(aaaa + "<br>");


////////////////////////////////////// task-5 /////////////////////////////////

// function square(a){
//     var b = a*a;
//     document.write(b+"<br>");
// } 
// square(4);
// square(12);
// square(24);
// square(7);
// square(9);
// square(14);

////////////////////////////////////// task-6 /////////////////////////////////

// function factorial(){
// var fact=1;
// var user = +prompt("enter a number")
// for (var i=1;i<=user;i++){
//     fact = fact * i;
// }
// document.write(fact);

// }
// factorial();




////////////////////////////////////// task-7 /////////////////////////////////

// function display (start,end){

//     for (var i=start ; i<=end ; i++){

//             document.write(i+"<br>")
//     }

// }
// display(9,180);

////////////////////////////////////// task-8 /////////////////////////////////


// function pythagorean(sideA, sideB){
//         return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
//       }

//       console.log(pythagorean(4, 3));






////////////////////////////////////// task-9 /////////////////////////////////

// var first =140;
// var second =220;
// var a;
// function aor(width,height){
//     a=width*height;
//     document.write(a,"<br>");
// } 
///////  1(argument as value)   /////////////////

// aor(610,53);
// aor(10,3);

///////  2(argument as variable)   /////////////////

// aor(first ,second);
// aor(first ,second);

///////////////////////////////////// task-10 /////////////////////////////////


// var check="";
// var word = prompt("enter a word");
// function palindrome_word(){
// for(i=word.length-1;i>=0 ; i--)
// {
// check += word[i];
// }
// document.write(check);
// if(word===check  ) {
//     alert (word + " is Palindrome word");
//     }
//     else{
//        alert (word + " is not a Palindrome word");    
//     }
// }
// palindrome_word();

////////////////////////////////////// task-11 /////////////////////////////////

// function capital_letter(str) 
// {
// str = str.split(" ");

// for (var i = 0, x = str.length; i < x; i++) {
//     str[i] = str[i][0].toUpperCase() + str[i].substr(1);
// }

// return str.join(" ");
// }

// alert(capital_letter("i am a student, but i am not studying"));






////////////////////////////////////// task-12 /////////////////////////////////




// function longestWord(string) {
//         var str = string.split(" ");
//         var longest = 0;
//         var word = null;
//         for (var i = 0; i < str.length; i++) {
//             if (longest < str[i].length) {
//                 longest = str[i].length;
//                 word = str[i];
//             }
//         }
//         return word;
//         }

//         alert(longestWord("Web Development Tutorials"));






////////////////////////////////////// task-13 /////////////////////////////////

// function vowel_count(str1)
// {
//   var vowel_list = 'aeiouAEIOU';
//   var vcount = 0;

//   for(var x = 0; x < str1.length ; x++)
//   {
//     if (vowel_list.indexOf(str1[x]) !== -1)
//     {
//       vcount += 1;
//     }

//   }
//   return vcount;
// }
// console.log(vowel_count("The quick brown fox"));




////////////////////////////////////// task-14 /////////////////////////////////

function calcCircumference(radius) {
        let circumferece = 2 * 3.14 * radius;
        alert("The Circumference is " + circumferece + " units");
}
function calcArea(radius) {
        let area = 3.14 * radius * radius;
        alert("The Area is " + area + " units");
}
calcCircumference(2);
calcArea(4);



































































































