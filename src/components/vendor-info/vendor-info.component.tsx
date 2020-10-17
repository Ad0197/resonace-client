import React, { useContext } from "react";
import ProductContext, {
  ProductContextType,
} from "../../context/product.context";
import "./vendor-info.styles.scss";

const VendorInfo: React.FC = () => {
  const { vendor }: ProductContextType = useContext(ProductContext);
  console.log(vendor);
  return (
    <React.Fragment>
      <div className="vendor-info">
        <img
          className="vendor-logo"
          src={vendor?.logo[0].url}
          alt="logo of vendor"
        />
        <div className="column">
          <div className="column">
            <p className="title">Branch Name</p>
            <p
              className="link"
              onClick={() => {
                if (vendor?.catalogLink)
                  window.location.href = vendor.catalogLink;
                return true;
              }}
            >
              {vendor?.name}
            </p>
          </div>

          <div className="column">
            <p className="title">Address</p>
            <address>{vendor?.closestShowroomAddress}</address>
          </div>
        </div>
        <div className="column">
          <div className="column">
            <p className="title">Vendor Sale Contact Name</p>
            <p>{vendor?.salesContact[0].name}</p>
          </div>

          <div className="column">
            <p className="title">Vendor Email</p>
            <p>{vendor?.salesContact[0].email}</p>
          </div>
        </div>
      </div>
      <div className="center">
        <p className="btn request-info">Request More Information</p>
      </div>
    </React.Fragment>
  );
};

export default VendorInfo;
