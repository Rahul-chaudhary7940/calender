var date= new Date();

function renderCalender(){
    var currentDate=document.querySelector(".month_str");
    var days=document.querySelectorAll(".days")[0];
    
    
    var arr=[ "January"," February"," March", "April", "May"," June",
    "July",  "August" ,"September", 
    "October"," November","December" ]
    
    currYear= date.getFullYear();
    currMonth= date.getMonth();

    let firstdayofmonth= new Date(currYear,currMonth,1).getDay();
    let lastdateofMonth = new Date(currYear , currMonth + 1 , 0).getDate();
    let lastdateoflastMonth = new Date(currYear , currMonth  , 0).getDate()
    let lastDayofMonth = new Date(currYear , currMonth  , lastdateofMonth).getDay()
    
    var today=new Date();
    
    let day="";

    for(let i=firstdayofmonth; i>0; i--){
        day+= "<div class='prev_date'>" + (lastdateoflastMonth-i+1) +"</div>";
    }


   for(let i=1;i<=lastdateofMonth;i++){
    if(i==today.getDate()&& date.getMonth()==today.getMonth() && date.getFullYear()==today.getFullYear()){
        day+= "<div class='today'>" + i +"</div>"
    }
    else{
        day+= "<div >" + i +"</div>"
    }}

    for(let i=lastDayofMonth;i<6;i++){
        day+= "<div class='prev_date'>" + (i-lastDayofMonth + 1) +"</div>" 
    }

    currentDate.innerHTML= `${arr[currMonth]} ${currYear}`
    days.innerHTML= day;
}


function moveDate(para){
 if(para =='prev'){
    date.setMonth(date.getMonth()-1);
 }
 else if (para=='next'){
   date.setMonth(date.getMonth()+1);
 }
 renderCalender();
}





