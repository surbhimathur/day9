const total= () =>
{
    const xhr= new XMLHttpRequest();
    xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    xhr.responseType="json";
    xhr.onload=()=>{
      
        const total_population=xhr.response;
        var display= total_population.reduce((acc,value)=>
          acc+value.population,0
        );
        console.log(`total population is ${display}`);
                
        
    };
    xhr.send();
};

total();

