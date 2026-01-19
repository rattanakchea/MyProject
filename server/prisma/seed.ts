import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Clear existing data
  await prisma.item.deleteMany();
  await prisma.user.deleteMany();

  // Create sample users
  const user1 = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@example.com",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: "Bob",
      email: "bob@example.com",
    },
  });

  // Create sample items
  await prisma.item.create({
    data: {
      title: "Learn TypeScript",
      description: "Master TypeScript fundamentals",
      userId: user1.id,
    },
  });

  await prisma.item.create({
    data: {
      title: "Build a REST API",
      description: "Create a REST API with NestJS",
      userId: user1.id,
    },
  });

  await prisma.item.create({
    data: {
      title: "Learn React",
      description: "Master React and hooks",
      userId: user2.id,
    },
  });

  console.log("✅ Seed completed!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
