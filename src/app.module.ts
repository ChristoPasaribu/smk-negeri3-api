import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SejarahIdentitasModule } from './sejarah-identitas/sejarah-identitas.module';
import { VisiMisiModule } from './visi-misi/visi-misi.module';
import { StrukturOrganisasiModule } from './struktur-organisasi/struktur-organisasi.module';
import { FasilitasModule } from './fasilitas/fasilitas.module';
import { PrestasiModule } from './prestasi/prestasi.module';
import { ProgramKeahlianModule } from './program-keahlian/program-keahlian.module';
import { MitraKerjasamaModule } from './mitra-kerjasama/mitra-kerjasama.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    SejarahIdentitasModule,
    VisiMisiModule,
    StrukturOrganisasiModule,
    FasilitasModule,
    PrestasiModule,
    ProgramKeahlianModule,
    MitraKerjasamaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}