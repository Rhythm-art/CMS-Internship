import { prisma } from "../../config/database.js";


export const registerUser = async ()=>{
    const {name, email, password, role, phone} = req.body;

//email and phone exists or not
    const existingUser = await prisma.user.findFirst({
        where: {
            OR: [
                { email},
                ...email(phone?[{ phone }]: [])
            ]
        }
    })
    if(existingUser){
        throw new Error("User with this email or phone already exists");
    }
    const hashedPassword = await hashPassword(password);
    const newUser = await prisma.user.create(
        {
            data: {
                name,
                email,
                phone,
                password: hashedPassword,
                role
            },
            select: {
                id: true,
                name: true,
                email: true,
                phone: true,
                password: true,
                role: true,
                createdAt: true,
                updatedAt: true
            }
        }
    )
    return newUser;
}