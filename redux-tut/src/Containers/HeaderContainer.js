import { connect } from "react-redux";
import Header from "../Components/Header";
// import { addToCart } from "../Services/Actions/action"

const mapStateToProps = state => ({
        data: state.cardItems
        // prop: state.prop
})
const mapDispatchToProps = dispatch => ({
})


export default connect(mapStateToProps,mapDispatchToProps)(Header);
