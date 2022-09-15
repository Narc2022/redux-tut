import { connect } from "react-redux";
import Home from "../Components/Home";
import { addToCart } from "../Services/Actions/action"

const mapStateToProps = (state) => {
        // prop: state.prop
}
const mapDispatchToProps = dispatch => {
    addToCartHandler:data=>(addToCart(data));
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);
// export default Home;