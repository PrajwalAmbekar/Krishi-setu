interface IUser {
  id: string;
  name: string;
  phone: number;
  createdAt: Date;
}

interface IFarmer extends IUser {
  role: 'farmer';
  farmSize: number;
  cropTypes: string;
  location: string;
}

interface IBuyer extends IUser {
  role: 'buyer';
  mandiId: string;
  buyingCapacity: number;
}

interface ITrucker extends IUser {
  role: 'trucker';
  vehicleCapacity: number;
  licenseNumber: string;
  currentLocation: string;
}

type KrishiUser = IFarmer | IBuyer | ITrucker;

type CreateFarmerDTO = Omit<IFarmer, 'id' | 'createdAt'>;

type CreateBuyerDTO = Omit<IBuyer, 'id' | 'createdAt'>;

type CreateTruckerDTO = Omit<ITrucker, 'id' | 'createdAt'>;

function handleUser(user: KrishiUser) {
  switch (user.role) {
    case 'farmer':
      console.log(
        `Farmer: ${user.name} with farm size ${user.farmSize} acres and crops ${user.cropTypes}`,
      );
      break;
    case 'buyer':
      console.log(
        `Buyer: ${user.name} with mandi ID ${user.mandiId} and buying capacity ${user.buyingCapacity}`,
      );
      break;
    case 'trucker':
      console.log(
        `Trucker: ${user.name} with vehicle capacity ${user.vehicleCapacity} and license number ${user.licenseNumber}`,
      );
      break;
  }
}

function UserDetails(User: KrishiUser): IUser {
  return {
    id: User.id,
    name: User.name,
    phone: User.phone,
    createdAt: User.createdAt,
  };
}
