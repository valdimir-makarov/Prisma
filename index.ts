import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
 

  

  try {    
    const  res = await prisma.user.findMany()
    console.log(res)

  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
