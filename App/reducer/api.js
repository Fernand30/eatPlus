


const initialState = { data: {} };
//sdvC#$SDA  // bird

export const Login = ( username,password) => {
  
   var jsonPostData = JSON.stringify({
             username: username,
             password: password
      });
      data = fetch('http://beta.eatplus.com/api/auth/login/', {
           method: 'POST',
           headers: {
                        'Content-Type': 'application/json'
                      },
           body:jsonPostData,
            })
      return(data)
}

export const ResturantList = () => {
  
   var url = 'http://beta.eatplus.com/api/v1/customer/restaurants/'
      data = fetch(url, {
          method: 'GET',
            })
      return(data)
}

export const OrderList = () => {
  
   var url = 'http://beta.eatplus.com/api/v1/restaurant/orders/'
      data = fetch(url, {
          method: 'GET',
            })
      return(data)
}

export const OrderListUpdate = () => {
  
   var url = 'http://beta.eatplus.com/api/v1/restaurant/orders/1/'
      data = fetch(url, {
          method: 'GET',
            })
      return(data)
}





