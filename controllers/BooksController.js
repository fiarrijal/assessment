const dataBooks = require("../models/data");

exports.index = (req, res, next) => {
  try {
    return res.status(200).json({ status: "success", data: dataBooks });
  } catch (err) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: err.message,
    });
  }
};
exports.show = (req, res, next) => {
  try {
    const { id } = req.params;
    // filtering data
    const filterData = dataBooks.find((item) => item.id === parseInt(id));
    const data = filterData ?? null;

    return res.status(200).json({ status: "success", data });
  } catch (err) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: err.message,
    });
  }
};
exports.showByJenis = (req, res, next) => {
  try {
    const { jenis } = req.params;

    // filtering data
    const filterData = dataBooks.filter((item) => item.type.toLocaleLowerCase() === jenis.toLowerCase());
    const data = filterData ?? [];

    return res.status(200).json({ status: "success", data });
  } catch (err) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

exports.store = (req, res, next) => {
  try {
    const { name, type } = req.body;

    const newId = dataBooks.slice(-1)[0].id + 1;
    const dataStore = { id: newId, name, type };

    const data = [...dataBooks, dataStore];

    return res.status(200).json({ status: "success", data });
  } catch (err) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: err.message,
    });
  }
};
exports.update = (req, res, next) => {
  try {
    let { id } = req.params;
    const { name, type } = req.body;

    id = parseInt(id);

    //   Cek data
    const cekData = dataBooks.find((item) => item.id === parseInt(id));
    if (!cekData) return res.status(200).json({ status: "success", data: "Data tidak ditemukan" });

    //   update data
    const dataUpdate = { id, name: name ?? cekData.name, type: type ?? cekData.type };
    dataBooks[id - 1] = dataUpdate;

    return res.status(200).json({ status: "success", data: dataBooks });
  } catch (err) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

exports.destroy = (req, res, next) => {
  try {
    const { id } = req.params;

    // filtering data
    const filterData = dataBooks.filter((item) => item.id !== parseInt(id));

    return res.status(200).json({ status: "success", data: filterData });
  } catch (err) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: err.message,
    });
  }
};
