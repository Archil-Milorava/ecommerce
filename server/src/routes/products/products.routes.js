import express from "express";
import {  getItems, getSideItems, getSingleItem } from "./products.controller.js";

const productRoutes = express.Router();

productRoutes.get("/items", getItems);
productRoutes.get("/sideItems", getSideItems)
productRoutes.get("/:id", getSingleItem)

export default productRoutes;
