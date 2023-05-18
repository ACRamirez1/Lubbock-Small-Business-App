import { connect } from "react-redux";
import AddNewListing from "../components/AddNewListing";
import { addListing } from "../redux/actions";

export default connect(null, { addListing: addListing })(AddNewListing);
