export default interface SalesContact {
    name: string;
    vendors: string[];
    photo: {
        url: String[]
    }[];
    phoneNumber: string;
    email: string;
}