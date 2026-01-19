import { Module } from "@nestjs/common";
import { PrismaModule } from "./modules/common/prisma.module";
import { UsersModule } from "./modules/users/users.module";
import { ItemsModule } from "./modules/items/items.module";

@Module({
  imports: [PrismaModule, UsersModule, ItemsModule],
})
export class AppModule {}
