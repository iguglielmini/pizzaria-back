import prismaClient from "../../prisma/index";

class ListCategoryService {
  async execute() {

    const category = await prismaClient.category.findMany({
        select:{
            id: true,
            name: true,
        }
    })

    return category;
  }
}

export { ListCategoryService };
