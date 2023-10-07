import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  SetMetadata,
} from '@nestjs/common';
import { GuardService } from './guard.service';
import { CreateGuardDto } from './dto/create-guard.dto';
import { UpdateGuardDto } from './dto/update-guard.dto';
import { RoleGuard } from './role.guard';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('守卫')
@Controller('guard')
@UseGuards(RoleGuard)
export class GuardController {
  constructor(private readonly guardService: GuardService) {}

  @ApiOperation({ summary: '创建接口', description: 'post接口' })
  @ApiResponse({ status: 404, description: '找不到' })
  @Post()
  create(@Body() createGuardDto: CreateGuardDto) {
    return this.guardService.create(createGuardDto);
  }

  @Get()
  @SetMetadata('roles', ['admin'])
  findAll() {
    return this.guardService.findAll();
  }

  @ApiQuery({ name: 'id', required: true, description: '这是个id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.guardService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGuardDto: UpdateGuardDto) {
    return this.guardService.update(+id, updateGuardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.guardService.remove(+id);
  }
}
