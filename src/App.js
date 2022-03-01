import { useState, useEffect } from 'react'; 
import "./App.css";
import ItemCard from './components/ItemCard'; 
import items from './items.json'; 

// Resources: 
// https://www.educationworld.com/a_lesson/03/lp325-03.shtml#:~:text=Foods%20That%20Originated%20in%20the%20New%20World%3A%20artichokes%2C%20avocados%2C,%2C%20chili%20peppers)%2C%20pineapples%2C
// https://www.wildflower.org/expert/show.php?id=5146#:~:text=%E2%80%94%20blueberries%2C%20cranberries%2C%20huckleberries%2C,they%20are%20now%20cultivated%20worldwide.

function App() {
  const [total, setTotal] = useState(0); 
  const [cart, setCart] = useState([]); 

  console.log(items); 
  // inlcude a description and a price for each thing on menu 
  const appetizers = items.appetizers; // at least 4 
  const soups = items.soups; // at least 2 
  const mainCourses = items.mainCourses; // at least 6 
  const sideDishes = items.sideDishes; // at least 4 
  const desserts = items.desserts; // at least 2 
  const headerTexts = ["Appetizers", "Soups", "Main Courses", "Side Dishes", "Desserts"]; 

  const handleClick = data => {
    // console.log(data); 
    let prevCart = cart; 
    prevCart.push(data); 
    setCart(prevCart); 
    // console.log(cart); 
    calculateTotal(); 
  }; 

  const handleCheckout = () => {
    setCart([]); 
    console.log("Cart:", cart); 
    calculateTotal(); 
  }; 

  const calculateTotal = () => {
    let nums = []; 
    cart.forEach(item => {
      nums.push(parseFloat(item.price)); 
    }); 
    setTotal(nums.reduce((a, b) => a + b, 0).toFixed(2)); 
  }; 

  useEffect(calculateTotal, [cart]); 

  return (
    <div>
      <div className="mx-auto w-11/12 sticky top-0 z-50 navbar bg-base-100 mb-20 shadow-xl rounded-xl">
        <div className="flex-1">
          <a href="#" className="btn btn-ghost normal-case text-xl">Bubonic Buffet</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end mr-5">
            <label tabIndex="0" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg> 
                <span className="badge badge-sm indicator-item">{cart.length}</span>
              </div>
            </label>
            <div
              tabIndex="0"
              className="mt-3 card card-compact w-52 dropdown-content bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">{cart.length} Items</span>
                <span className="text-primary">Total: ${total}</span>
                <div className="card-actions"> 
                  <button className="btn btn-primary btn-block" onClick={handleCheckout}>Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-5xl font-bold text-center m-5">MENU</h1>
      <div className="divider w-1/2 mx-auto"></div> 
      <div className="w-full h-full pb-20"> 
        {/* {headerTexts.map((text, index) => (
          <div key={index}>
            <h1 className="text-2xl font-bold ml-10 mb-5">{text}</h1>
            <div className="mx-auto w-5/6 p-4 space-x-4 carousel carousel-center bg-neutral rounded-box">
              {text.map((item, index) => (
                <div className="carousel-item" key={index}>
                  <ItemCard imgSrc={item.imgSrc} name={item.name} desc={item.desc} price={item.price} handleClick={handleClick}/>
                </div> 
              ))}
            </div> 
            <div className="mx-auto divider w-11/12"></div> 
          </div> 
        ))} */}
        {/* APPETIZERS */}
        <h1 className="text-2xl font-bold ml-20 mb-5">Appetizers</h1>
        <div className="mx-auto w-5/6 p-4 space-x-4 carousel carousel-center bg-neutral rounded-box">
          {appetizers.map((item, index) => (
            <div className="carousel-item" key={index}>
              <ItemCard imgSrc={item.imgSrc} name={item.name} desc={item.desc} price={item.price} handleClick={handleClick} />
            </div> 
          ))}
        </div> 
        <div className="mx-auto divider w-11/12"></div> 
        {/* SOUPS */}
        <h1 className="text-2xl font-bold ml-20 mb-5">Soups</h1>
        <div className="mx-auto w-5/6 p-4 space-x-4 carousel carousel-center bg-neutral rounded-box">
          {soups.map((item, index) => (
            <div className="carousel-item" key={index}>
              <ItemCard imgSrc={item.imgSrc} name={item.name} desc={item.desc} price={item.price} handleClick={handleClick}/>
            </div> 
          ))}
        </div> 
        <div className="mx-auto divider w-11/12"></div> 
        {/* MAIN COURSES */} 
        <h1 className="text-2xl font-bold ml-20 mb-5">Main Courses</h1>
        <div className="mx-auto w-5/6 p-4 space-x-4 carousel carousel-center bg-neutral rounded-box">
          {mainCourses.map((item, index) => (
            <div className="carousel-item" key={index}>
              <ItemCard imgSrc={item.imgSrc} name={item.name} desc={item.desc} price={item.price} handleClick={handleClick}/>
            </div> 
          ))}
        </div> 
        <div className="mx-auto divider w-11/12"></div> 
        {/* SIDE DISHES */}
        <h1 className="text-2xl font-bold ml-20 mb-5">Side Dishes</h1>
        <div className="mx-auto w-5/6 p-4 space-x-4 carousel carousel-center bg-neutral rounded-box">
          {sideDishes.map((item, index) => (
            <div className="carousel-item" key={index}>
              <ItemCard imgSrc={item.imgSrc} name={item.name} desc={item.desc} price={item.price} handleClick={handleClick}/>
            </div> 
          ))}
        </div> 
        <div className="mx-auto divider w-11/12"></div>
         {/* DESSERTS */}
        <h1 className="text-2xl font-bold ml-20 mb-5">Desserts</h1>
        <div className="mx-auto w-5/6 p-4 space-x-4 carousel carousel-center bg-neutral rounded-box">
          {desserts.map((item, index) => (
            <div className="carousel-item" key={index}>
              <ItemCard imgSrc={item.imgSrc} name={item.name} desc={item.desc} price={item.price} handleClick={handleClick}/>
            </div> 
          ))}
        </div> 
      </div>
      <footer className="footer flex mx-auto p-4 w-11/12 bg-base-200 shadow-xl rounded-t-xl">
              <p className="flex">Made with <svg xmlns="http://www.w3.org/2000/svg" className="m-0 p-0 h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
</svg> by <a href="https://github.com/Lathryx/Bubonic-Buffet" target="_blank" className="text-primary">Lathryx</a></p>
      </footer>
    </div>
  );
}

export default App;

// Template/example for item: 
// {
//   "imgSrc": "https://static.onecms.io/wp-content/uploads/sites/9/2021/12/20/sous-vide-pork-chops-FT-RECIPE1221.jpg", 
//   "name": "NAME", 
//   "desc": "Some description...", 
//   "price": "63" 
// }, 
