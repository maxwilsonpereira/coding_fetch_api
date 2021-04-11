export interface SubscriberModel {
  id: string;
  name: string;
  country: string;
  city: string;
  address: string;
  avatar: string;
  accounts: [
    {
      id: string;
      subscriberId: string;
      created: string;
      name: string;
      balance: number;
    }
  ];
  calls: [
    {
      id: string;
      subscriberId: string;
      created: string;
      name: string;
      balance: number;
    }
  ];
}
