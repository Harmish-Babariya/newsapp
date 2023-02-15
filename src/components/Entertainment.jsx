import React, { useState, useEffect } from 'react';

const Entertainment = () => {
    let [value, setValue] = useState(<h1>LOADING....</h1>);

    useEffect(() => {
      data();
    }, [])
    
    const data = async () =>{
        const got = await fetch("https://saurav.tech/NewsAPI/top-headlines/category/entertainment/in.json");
        const result = await got.json();
    
    
    
   
    let Data = result.articles.map((res) =>{

        return(
        <div className="max-w-sm rounded overflow-hidden shadow-lg col-12 col-md-6 col-lg-6 col-xl-4 mb-5">
        <img className="w-full" src={res.urlToImage} alt="Sunset in the mountains"/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{res.title}</div>
          <p className="text-gray-700 text-base">
            {res.content}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <a className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" href={res.url}>Read More...</a>
        </div>
      </div>);
    });
   
    setValue(Data);
}


    return (<> 
    <div className="menu-items container-fluid mt-1" >
            <div className="row">
                <div className="col-11 mx-auto">
                    <div className="row my-5" >
    {value}
    </div>
    </div>
    </div>
    </div>
</>)}

export default Entertainment;
