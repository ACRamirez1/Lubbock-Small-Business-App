import { connect } from "react-redux";
import Home from "../components/Home";
import { deleteListing } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
  };
};

export default connect(mapStateToProps, { deleteListing })(Home);
