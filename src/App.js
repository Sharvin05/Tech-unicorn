import Header from './Header.js';
import Hero from './Hero';
import SideMenu from './SideMenu'
import Card1 from './Card1.js';
import { useEffect, useState } from 'react';
import Footer from './Footer';



function App() {
  let [loadingState, setLoadingState] = useState(true);
  let [dataState, setDataState] = useState([])
  useEffect(
    function () {

      fetch('https://fakestoreapi.com/products')
        .then(
          function (stringResponse) {
            return stringResponse.json()

          }
        )
        .then(
          function (jsonResponse) {
            setLoadingState(false);
            setDataState(jsonResponse);
          }
        )
        .catch(
          function (error) {
            console.log(error);
          }
        )

    },
    []

  )
  if (loadingState === true) {
    return (
      <div className="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="App">
        <Header></Header>
        <Hero></Hero>
        <SideMenu></SideMenu>
        {
          dataState.map(
            function (obj) {
              return (
                <div >
                  <Card1
                      image={obj.image}
                      title={obj.title}
                      description={obj.description}
                      rating={obj.rating.rate}
                      price={obj.price}
                      category={obj.category}
                    ></Card1>
                </div>
              )
            }
          )
        }
        <Footer></Footer>
      </div>
    );
  }


}

export default App;