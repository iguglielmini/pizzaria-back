import { Router } from "express";

import { CreateUserController } from "./controllers/user/createUserController";
import { AuthUserController } from "./controllers/user/authUserController";
import { DetailUserController } from "./controllers/user/detailUserController";
import { CreateCategoryController } from "./controllers/category/createCategoryController";
import { ListCategoryController } from "./controllers/category/listCategoryController";
import { CreateProductController } from "./controllers/product/createProductController";

import { isAuthenticated } from "./middlewares/isAuthenticated";
import uploadConfig from "./config/multer";
import multer from "multer";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

// Rotas User
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);
// Category
router.post(
  "/category",
  isAuthenticated,
  new CreateCategoryController().handle
);
router.get("/category", isAuthenticated, new ListCategoryController().handle);
// Product
router.post(
  "/product",
  isAuthenticated,
  upload.single("file"),
  new CreateProductController().handle
);

export { router };
