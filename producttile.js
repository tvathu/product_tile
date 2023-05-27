
import './App.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export default function App() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="App">
      <h1>FLASH SALE!</h1>
      <Carousel responsive={responsive}>
  <div className="card">
  <img className="product--image" src="https://comradeweb.com/wp-content/uploads/2022/06/The-Best-Shoe-eCommerce-Website-Designs.jpg" alt="product image"/>
  <h2>sneaker</h2>
  <p className="price">$20</p>
  <p>some description</p>
  <p><button>add to cart</button></p>
  </div>

  <div className="card">
  <img className="product--image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiRxDwvmDIuffToO9cBR33FoeFr8NAXl52kSQ-TNoJCA&usqp=CAU&ec=48665701" alt="product image"/>
  <h2>earbuds</h2>
  <p className="price">$30</p>
  <p>some description</p>
  <p><button>add to cart</button></p>
  </div>
  <div className="card">
  <img className="product--image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc7mKsL1uZKi989RqWHnSFXjBm9fs0xSs2u3JG21W7rA&usqp=CAU&ec=48665701" alt="product image"/>
  <h2>smartphone</h2>
  <p className="price">$40</p>
  <p>some description</p>
  <p><button>add to cart</button></p>
  </div>
  <div className="card">
  <img className="product--image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2KLN-DWuuOl5kscwdtSnV_dlWd5x1jVu5STSoLF6zCw&usqp=CAU&ec=48665701" alt="product image"/>
  <h2>kids dress</h2>
  <p className="price">$20</p>
  <p>some description</p>
  <p><button>add to cart</button></p>
  </div>
  <div className="card">
  <img className="product--image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7pm_MqrFym_5J6UNNkXN3zi7jXw-VAYFDWlDmIxNdTw&usqp=CAU&ec=48665701" alt="product image"/>
  <h2>electronic items</h2>
  <p className="price">$60</p>
  <p>some description</p>
  <p><button>add to cart</button></p>
  </div>
  
</Carousel>;      
    </div>
  )
}

