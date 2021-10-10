const population = () =>
{
    const xhr= new XMLHttpRequest();
    xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    xhr.responseType="json";
    xhr.onload=()=>{
      
        const pop=xhr.response;
        
          var c=pop.filter((p)=>
          p.population<200000
          
          );
            console.log(c);         
        
    };
    xhr.send();
};

 population();

