import { Body, Controller, Post } from '@nestjs/common';
// import { PrismaService } from './database/prisma.service';
// import { randomUUID } from 'node:crypto';
import { CreateTeamMember } from './dto/create-team-member';
import { RocketMembersRepository } from './repositories/rocket-members-repository';
@Controller('app')
export class AppController {
  constructor(private rocketMemberRepo: RocketMembersRepository) {}

  @Post('hello')
  async getHello(@Body() body: CreateTeamMember) {
    const { name, function: memberFunction } = body;
    await this.rocketMemberRepo.create(name, memberFunction);
    // const member = await this.prisma.rocketTeamMember.create({
    //   data: {
    //     id: randomUUID(),
    //     name: name,
    //     function: memberFunction,
    //   },
    // });

    return member;
  }
}
