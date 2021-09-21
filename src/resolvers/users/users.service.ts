import { prisma } from 'src/common/services';

export class UserService {
  async getOneById(id: string) {
    const users = prisma.user.findFirst({
      where: {
        id
      }
    });

    return users;
  }

  getAll() {
    return prisma.user.findMany();
  }

  getUserPosts() {
    return prisma.user.findMany({});
  }
}
