import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createUser(email: string, name?: string): Promise<void> {
  try {
    await prisma.user.create({
      data: {
        email,
        name,
      },
    });
    console.log('User created successfully');
  } catch (error) {
    console.error('Error creating user:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Example usage:
createUser('exampldfde@example.com', 'John Doe');
