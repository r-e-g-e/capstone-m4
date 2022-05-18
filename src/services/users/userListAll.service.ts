import { AppDataSource } from "../../data-source";
import { User } from "../../entities/User/user.entity";

export const userListAllService = async () => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find({
    where: {
      role: "supplier",
    },
  });

  return users;
};

export default userListAllService;