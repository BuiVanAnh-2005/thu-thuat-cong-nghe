// src/data/articles.js

import meoCongNghe from "./meoCongNghe/index.js";

import ungDung from "./ungDung/index.js";
import tinTucCongNghe from "./TinTucCongNghe/index.js";
import danhGia from "./danhGia/index.js";
import thietBiDeo from "./thietBiDeo/index.js";
import triTueNhanTao from "./triTueNhanTao/index.js"; // AI
import baoMat from "./baoMat/index.js";
import lapTrinh from "./lapTrinh/index.js";
import phanMem from "./phanMem/index.js";
import phanCung from "./phanCung/index.js";
import xeCongNghe from "./xeCongNghe/index.js";
import khamPha from "./khamPha/index.js";
import dauTuThiTruong from "./dauTuThiTruong/index.js";
import nganHangSo from "./nganHangSo/index.js";
import fintechStartup from "./fintechStartup/index.js";
import aiTrongTaiChinh from "./aiTrongTaiChinh/index.js";
import anNinhBaoMat from "./anNinhBaoMat/index.js";
import congNgheThanhToan from "./congNgheThanhToan/index.js";
import xuHuongDuBao from "./xuHuongDuBao/index.js";
import huongDanTips from "./huongDanTips/index.js";



const articles = [
  ...meoCongNghe,
  ...ungDung,
  ...tinTucCongNghe,
  ...danhGia,
  ...thietBiDeo,
  ...triTueNhanTao,
  ...baoMat,
  ...lapTrinh,
  ...phanMem,
  ...phanCung,
  ...xeCongNghe,
  ...khamPha,
  // --- Tài chính Công nghệ ---
  ...dauTuThiTruong,
  ...nganHangSo,
  ...fintechStartup,
  ...aiTrongTaiChinh,
  ...anNinhBaoMat,
  ...congNgheThanhToan,
  ...xuHuongDuBao,
  ...huongDanTips,
  
];

export default articles;
