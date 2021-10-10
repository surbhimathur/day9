
const getcurrency = () =>
{
    const xhr= new XMLHttpRequest();
    xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    xhr.responseType="json";
    xhr.onload=()=>{
      
        const dummy=xhr.response;
        const aa=[];
        dummy.filter((value)=>{
            value.currencies.map((item)=>{
                if(item["code"]==="USD")
                {
                    aa.push(value);
                }
            })
        })
      
         console.log(aa);
         
    
    };
    xhr.send();
};

getcurrency();

 