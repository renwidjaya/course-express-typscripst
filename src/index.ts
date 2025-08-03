import express, { Application } from "express";
import router from "@routes/index";

const app: Application = express();
const PORT = 5400;

interface Buku {
    bukuId: number;
    judul: string;
    deskripsi: string;
    tanggalTerbit: string;
}

type detailBuku = {
    jam: string;

}

app.get("/", (_req, res) => {

    const payload: Buku[] = [
      {
        bukuId: 1,
        judul: "Belajar Typescript",
        deskripsi: "ini adalah materi tentang typscripts",
        tanggalTerbit: "01/07/2025",
      },
      {
        bukuId: 2,
        judul: "Belajar Bahasa ingris",
        deskripsi: "ini adalah materi tentang typscripts",
        tanggalTerbit: "01/07/2025",
      },
      {
        bukuId: 3,
        judul: "Belajar Bahasa Jepang",
        deskripsi: "ini adalah materi tentang typscripts",
        tanggalTerbit: "01/07/2025",
      },
    ];

    const tambahBuku: Buku = {
      bukuId: 4,
      judul: "Belajar Reactjs",
      deskripsi: "ini adalah buka tetang pelajaran reactjs",
      tanggalTerbit: "06/06/2025",
    };

    // payload.push(tambahBuku);

    const gabungkan = [...payload, tambahBuku];

    // const datagabungan = [];
    // for (let index = 0; index < gabungkan.length; index++) {
    //   datagabungan.push({
    //     ...gabungkan[index],
    //     jam: "18:00"
    //   });
    // }

    const ringkasan = gabungkan.map((item: Buku) => {
      return {
        judul: item.judul,
        deskripsi: item.deskripsi,
      };
    });

    res.send({
      data: ringkasan,
      jumlahData: ringkasan.length,
    });

    res.send(payload);

});

app.use(router);

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
