import express from "express";
const router = express();
import buku from './buku'

router.use('/api/buku', buku);

export default router;