import SalesContact from "./sales-contact.model";

export default interface Vendor {
  name: string;
  notes: string;
  logo: {
    url: string
  }[];
  salesContact: SalesContact[];
  vendorPhoneNumber?: string;
  closestShowroomAddress?: string;
  catalogLink: string;
  shippingDetails?: {
    string: []
  }[];
}
