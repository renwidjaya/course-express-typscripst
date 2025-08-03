import express from "express";
const router = express();

 const payload: any = [
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

router.get('/', (req, res) => {
    return res.status(200).json(payload)
})

router.get('/:id', (req, res) => {
    const { id } = req.params;

    if (payload.length < id) {
       return res.status(404).json({message: "data tidak di temukan!"})
    }

    return res.status(200).json({
        message: "Berhasil menampilkan data!",
        data: payload[id],
    });
});

export default router;
