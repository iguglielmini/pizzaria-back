import { Request, Response } from "express";
import { CreateProductServices } from "../../services/product/createProductServices";

class CreateProductController {
  async handle(req: Request, res: Response) {
    const { name, price, description, category_id } = req.body;

    const createProductService = new CreateProductServices();

    if (!req.file) {
      throw new Error("Erro de envio de foto!");
    } else {
      const { originalname, filename: banner } = req.file;

      const product = await createProductService.execute({
        name,
        price,
        description,
        category_id,
        banner,
      });

      return res.json(product);
    }
  }
}

export { CreateProductController };
