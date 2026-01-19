import { Injectable } from "@nestjs/common";
import { PrismaService } from "../common/prisma.service";

@Injectable()
export class ItemsService {
  constructor(private prisma: PrismaService) {}

  async create(data: { title: string; description: string; userId: number }) {
    return this.prisma.item.create({ data });
  }

  async findAll() {
    return this.prisma.item.findMany({ include: { user: true } });
  }

  async findOne(id: number) {
    return this.prisma.item.findUnique({
      where: { id },
      include: { user: true },
    });
  }
}
