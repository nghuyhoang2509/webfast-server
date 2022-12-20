import PageModel from "../models/Page.js";

export const getListPage = async (req, res) => {
  try {
    const uid = req.params.uid;
    const listPage = await PageModel.find({ uid }).sort({ updatedAt: -1 });
    return res.json({
      success: true,
      message: "lấy dữ liệu thành công",
      listPage,
    });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error });
  }
};

export const createPage = async (req, res) => {
  try {
    let pageInfo = req.body.pageInfo;
    pageInfo = await PageModel.create(pageInfo);
    pageInfo.save();
    return res.json({
      success: true,
      message: "tạo dữ liệu thành công",
      pageInfo,
    });
  } catch (error) {
    return res.json({ success: false, message: error });
  }
};

export const deletePage = async (req, res) => {
  try {
    const id = req.params.id;
    await PageModel.deleteOne({ _id: id });
    return res.json({
      success: true,
      message: "xóa dữ liệu thành công",
    });
  } catch (error) {
    return res.json({ success: false, message: error });
  }
};

export const updateInfoPage = async (req, res) => {
  try {
    const id = req.params.id;
    let pageInfo = req.body.pageInfo;
    pageInfo = await PageModel.findByIdAndUpdate(id, pageInfo, {
      new: true,
    });
    return res.json({
      success: true,
      message: "cập nhật dữ liệu thành công",
      pageInfo,
    });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error });
  }
};
