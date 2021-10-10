const getcountries = () =>
{
    const xhr= new XMLHttpRequest();
    xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    xhr.responseType="json";
    xhr.onload=()=>{
      
        const regionn=xhr.response;
        
          var c=regionn.filter((ele)=>
          ele.region==="Asia"
          
          );
            console.log(c);         
        
    };
    xhr.send();
};

 getcountries();

