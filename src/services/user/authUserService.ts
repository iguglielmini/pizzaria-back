import prismaClient from "../../prisma/index";
import { compare } from "bcryptjs";

interface AuthRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new Error("E-mail incorreta!");
    }

    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch){
        throw new Error("Senha incorreta!");
    }

    return { ok: true };
  }
}

export { AuthUserService };
