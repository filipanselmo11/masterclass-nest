import { PrismaService } from "src/database/prisma.service";
import { RocketMembersRepository } from "../rocket-members-repository";
import { randomUUID } from "crypto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaRocketMembersRepository implements RocketMembersRepository {
    constructor(private prisma: PrismaService) {}

    async create(name: string, memberFunction: string): Promise<void> {
        data: {
            id: randomUUID(),
            name,
            function: memberFunction,
        }
    }
}