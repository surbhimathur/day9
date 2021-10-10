const getdetails = () =>
{
    const xhr= new XMLHttpRequest();
    xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    xhr.responseType="json";
    xhr.onload=()=>{
      
        const details=xhr.response;
        details.forEach(show);
        function show(d)
        {
            console.log(`Name :${d.name}, Capital: ${d.capital}, Flag :${d.flag}`);
        }
        
          
    };
    xhr.send();
};

getdetails();

