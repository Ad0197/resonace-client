import React, { useContext, useEffect } from "react";
import ProductView from "../../components/product-view/product-view.component";
import VendorInfo from "../../components/vendor-info/vendor-info.component";
import ProductContext from "../../context/product.context";
import useModal from "../../hooks/useModal";
import Furniture from "../../models/furniture.model";

type ItemViewProps = {
  item?: Furniture;
};

const ItemView: React.FC<ItemViewProps> = ({ item }) => {
  const { setItem, setVendor, request, Modal } = useContext(ProductContext);
  useEffect(() => {
    setItem(null);
    setItem(item);
    const vendor = item?.vendor;
    setVendor(null);
    setVendor(vendor);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div>
        <ProductView />
        <div className="divider">VENDOR INFO</div>
        <VendorInfo />
      </div>
      {Modal ? (
        <Modal>
          {request ? <p>Email was send it</p> : <p>Something happen</p>}
        </Modal>
      ) : (
        ""
      )}
    </>
  );
};

export default ItemView;
