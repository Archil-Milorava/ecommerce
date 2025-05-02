import prisma from "../../config/prisma.js";
import { BAD_REQUEST, OK } from "../../constants/http.js";
import appError from "../../utils/errorHandler.js";

export const getItems = async (req, res, next) => {
  try {
    const items = await prisma.item.findMany({
      where: {
        price: {
          gt: 42,
        },
      },
    });

    if (!items) {
      throw new appError("Not items found", BAD_REQUEST);
    }

    res.status(OK).json({
      count: items.length,
      items,
    });
  } catch (error) {
    next(error);
  }
};

export const getSideItems = async (req, res, next) => {
  try {
    const items = await prisma.item.findMany({
      where: {
        price: 42,
      },
    });

    if (!items || items.length === 0) {
      throw new appError("No items found", BAD_REQUEST);
    }

    res.status(OK).json({
      count: items.length,
      items,
    });
  } catch (error) {
    next(error);
  }
};

export const getSingleItem = async (req, res, next) => {
  const { id } = req.params;
  try {
    const item = await prisma.item.findUnique({
      where: {
        id,
      },
    });

    if (!item) {
      throw new appError("No item found", BAD_REQUEST);
    }

    res.status(OK).json({
      item,
    });
  } catch (error) {
    next(error);
  }
};
