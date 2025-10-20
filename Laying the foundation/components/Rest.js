import { useState, useEffect } from "react";

const Rest = () => {
   const [restData, setrestdata] = useState(null);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9254533&lng=77.546757&restaurantId=336828&catalog_qa=undefined&query=Pizza"
    );

    const json =  await data.json();
    console.log(json);
    setrestdata(json);
  };

  return (
    <div>
      <h1>Kathi Junction</h1>
      <h3>menu</h3>
      <ul>
        <li>kebab</li>
        <li>kebab</li>
        <li>kebab</li>
      </ul>
    </div>
  );
};

export default Rest;
