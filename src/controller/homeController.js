import db from "../models/index.js";
import * as CRUDService from "../services/CRUDService.js";
// hàm getHomePage
export const getHomePage = async (req, res) => {
    try {
        const data = await db.User.findAll();
        console.log("...........................");
        console.log(data);
        console.log("...........................");
        res.render("homepage.ejs", { data: JSON.stringify(data) });
    }
    catch (e) {
        console.error(e);
        // res.status(500).send("Internal Server Error");
    }
};
// hàm getAbout
export const getAboutPage = async (req, res) => {
    res.render("test/about.ejs");
};
// hàm CRUD
export const getCRUD = async (req, res) => {
    res.render("crud.ejs");
};
// hàm findAll CRUD
export const getFindAllCRUD = async (req, res) => {
    const data = await CRUDService.getAllUser();
    res.render("users/findAllUser.ejs", { datalist: data });
};
// hàm post CRUD
export const postCRUD = async (req, res) => {
    const message = await CRUDService.createUser(req.body);
    console.log(message);
    res.status(200).json(message);
};
// hàm lấy dữ liệu để edit
export const getEditCRUD = async (req, res) => {
    const userId = req.query.id;
    if (!userId) {
        res.status(400).send("User ID is required");
        return;
    }
    const userData = await CRUDService.getUserById(userId);
    res.render("users/editUser.ejs", { data: userData });
};
export const putCRUD = async (req, res) => {
    const data = req.body;
    const updated = await CRUDService.updateUser(data);
    res.render("users/editUser.ejs", { datalist: updated });
};
export const deleteCRUD = async (req, res) => {
    const userId = req.query.id;
    if (!userId) {
        res.status(400).send("User ID is required");
        return;
    }
    const message = await CRUDService.deleteUser(userId);
    res.status(200).json(message);
};
//# sourceMappingURL=homeController.js.map