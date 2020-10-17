import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductContext, {
  ProductContextType,
} from "../../context/product.context";
import { requestMoreInfoAction } from "../../redux/furniture/furniture.actions";
import { getUserFromState } from "../../redux/user/user.selector";
import "./vendor-info.styles.scss";

const VendorInfo: React.FC = () => {
  const {
    vendor,
    item,
    isRequestCorrectly,
    isRequestNotCorrectly,
    openModal,
    closeModa,
  }: ProductContextType = useContext(ProductContext);
  const dispatch = useDispatch();
  const user = useSelector(getUserFromState);
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
        <p
          className="btn request-info"
          onClick={() => {
            if (user?.email && item?.id) {
              dispatch(
                requestMoreInfoAction(user.email, item.id, (error) => {
                  if (error) {
                    isRequestNotCorrectly();
                  }
                  isRequestCorrectly();
                  openModal();
                  setTimeout(() => {
                    closeModa();
                  }, 2000);
                })
              );
            } else {
              isRequestNotCorrectly();
              openModal();
              setTimeout(() => {
                closeModa();
              }, 2000);
            }
          }}
        >
          Request More Information
        </p>
      </div>
    </React.Fragment>
  );
};

export default VendorInfo;
