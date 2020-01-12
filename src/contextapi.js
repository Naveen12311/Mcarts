import React,{Component} from 'react';
import Axios from 'axios';
const provider = React.createContext();

class Dataprovider extends Component{
    state = {
        products:[],
        cart:[],
        detailProduct:[],
        openmodals:false,
        modelcontent:[],
        totalprices:[],
        totalcartitems:0
    }
    componentDidMount(){
        this.original()
        Axios.get('https://api.myjson.com/bins/tiozi')
        .then(res=>{
            
            this.setState(()=>{return{detailProduct:res.data,modelcontent:res.data}})
           
        })
    
  
}
 original =()=>{
    Axios.get('https://api.myjson.com/bins/11pjye')
    .then(res=>{
       this.setState(()=>{return{products:res.data}});
    })
}

   getitem = (id) =>{
       let product = this.state.products.find(item=>item.id === id)
       return product;
   }
   totalcartprices = () =>{
       
    let carts = [...this.state.cart];
    let subtotal = 0;
       carts.map(prices=>{
          return subtotal += prices.total
      })
     this.setState({totalprices:subtotal});
     console.log(this.state.totalprices)
   }

    setDetailpage = (id)=>{
        const product = this.getitem(id)

        this.setState({detailProduct:product})

    }
    openmodeldata = (id) =>{
    let product = this.getitem(id);
    this.setState(()=>{return{modelcontent:product,openmodals:true}})
    }

    closemodal =()=>{
        this.setState({openmodals:false})
       console.log(this.state.openmodals)
    }

    clearcart = ()=>{
        this.setState(()=>{
            return{
            cart:[],
            totalprices:[],
            totalcartitems:0
        }},()=>{this.original()})
    }

    removeitem =(id)=>{
       let cart = [...this.state.cart];
       let products = [...this.state.products];
       this.getitem(id).inCart = false;
       this.getitem(id).count = 0;
       this.getitem(id).total = 0;
       let updatedcart = cart.filter(item=>{return item.id !== id});
         this.setState(()=>{return{cart:updatedcart,products:products}})
    }

    incriment =(id)=>{
        let cart = [...this.state.cart];
        this.getitem(id).count += 1;
        this.getitem(id).total += +this.getitem(id).price;
        this.setState(()=>{return{cart:cart}},
        ()=>{this.totalcartprices();this.cartitems()})
    }
    decriment =(id)=>{
        let cart = [...this.state.cart];
        if(this.getitem(id).count <= 1){
            let cart = [...this.state.cart];
            let products = [...this.state.products];
            this.getitem(id).inCart = false;
            this.getitem(id).count = 0;
            this.getitem(id).total = 0;
            let updatedcart = cart.filter(item=>{return item.id !== id});
              this.setState(()=>{return{cart:updatedcart,products:products}})
        }else{
            this.getitem(id).count -= 1;
            this.getitem(id).total -= +this.getitem(id).price;
            this.setState(()=>{return{cart:cart}},
            ()=>{this.totalcartprices();this.cartitems()})
        }
      
    }

    cartitems= ()=>{
        let cart = [...this.state.cart];
        let totalitem = 0;
        cart.map(totalitems=>{
           return totalitem += totalitems.count;
        })
        this.setState(()=>{return{totalcartitems:totalitem}})
    }
    addtocart = (id)=>{
        let cart = [...this.state.products];
        this.getitem(id).inCart = true
        if(this.getitem(id).inCart == true){
            this.getitem(id).count += 1;
            this.getitem(id).total += +this.getitem(id).price;
            var addcart = this.getitem(id);
        }  else if(this.getitem(id).inCart == false){
            var addcart = [...this.state.cart];
            if(addcart[id] == this.getitem(id)){
                addcart[id].remove();

            }
            if(this.getitem(id).count < 0){

            }else{
                this.getitem(id).count -= 1;

            }
            if(this.getitem(id).total < 0){

                     }
                     else{
                       this.getitem(id).total -= +this.getitem(id).price
           }
        }
       
        console.log(this.getitem(id))
     this.setState(()=>{return{products:cart,cart:[...this.state.cart,addcart]}
    
    },()=>{this.totalcartprices();this.cartitems()})
    }
    render(){
        return(
            <provider.Provider value={{
           ...this.state,
           setDetailpage:this.setDetailpage,
           addtocart:this.addtocart,
           openmodal:this.openmodeldata,
           closemodal:this.closemodal,
           incriment:this.incriment,
           decriment:this.decriment,
           clearcart:this.clearcart,
           removeitem:this.removeitem
            }}>
              {this.props.children}
            </provider.Provider>
        )
    }
}

const Consumer = provider.Consumer;

export {Dataprovider,Consumer}