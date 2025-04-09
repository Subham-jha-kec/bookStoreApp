import React from 'react'
// import list from "../list.json";

function Cards( {item}) {
    console.log("Item Data:", item);
console.log("Item Image:", item.image);

  return (

    <>
    <div className='mt-7 my-4 p-2 '>
    <div className="card bg-base-100 w-92 hover:scale-105 duration-120  shadow-sm dark:bg-slate-900 dark:text-white dark:border">
  {/* <figure>
    <img
      src={item.image} 
      alt={item.title} />
  </figure> */}

<figure>
  <img
    src={item.image}  // ✅ JSON se image lega
    alt={item.title}  // ✅ Accessibility ke liye
    className="h-48 w-full object-cover "
    onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }}  // ✅ Agar error aaye toh placeholder image dikhaye
  />
</figure>



  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className=" card-actions justify-between">
      <div className="rounded-2xl badge  badge-outline  border-gray-500 text-gray-800 text dark:bg-slate-900 dark:text-white  ">${item.price}</div>
      <div className="rounded-2xl  badge badge-outline border-gray-500 text-gray-800 hover:text-white hover:bg-pink-500 duration-100 dark:text-white ">Products</div>
    </div>
  </div>
</div>

    </div>
    </>
  )
}

export default Cards