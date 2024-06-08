import { Request, Response } from "express";
import Activities, { IActivities } from "../models/activities";

export const getActivitiesControllers = async (req: Request, res: Response) => {
  const { category }: IActivities = req.body;
  try {
    const activities = await Activities.find({ category }).exec();
    if (activities.length === 0) {
      res.status(404).json({
        msg: "No se encontraron actividades en la base de datos.",
      });
      return;
    }
    res.status(200).json({
      activities,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error en el servidor.",
    });
  }
};

export const addActivityControllers = async (req: Request, res: Response) => {
  const { category, code, name, cost, finalPrice, netIncome }: IActivities =
    req.body;

  const activity = new Activities({
    category,
    code,
    name,
    cost,
    finalPrice,
    netIncome,
  });

  await activity.save();
  res.status(201).json({
    activity,
  });
};

export const cancelActivityControllers = async (
  req: Request,
  res: Response
) => {
  const { code }: IActivities = req.body;
  try {
    const activity = await Activities.findOne({ code });

    if (!activity) {
      res.status(404).json({
        msg: "No se encontro la actividad en la base de datos.",
      });
      return;
    }

    if (code !== activity.code) {
      res.status(401).json({
        msg: "El codigo ingresado no es correcto",
      });
      return;
    }

    await Activities.findOneAndUpdate({ code }, { state: false });

    res.status(200).json({
      msg: "Actividad cancelada con exito",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error en el servidor.",
    });
  }
};

export const updateActivityControllers = async (
  req: Request,
  res: Response
) => {
  const { category, code, name, cost, finalPrice, netIncome }: IActivities =
    req.body;
  try {
    const activity = await Activities.findOne({ code });

    if (!activity) {
      res.status(404).json({
        msg: "No se encontro la actividad en la base de datos.",
      });
      return;
    }

    if (code !== activity.code) {
      res.status(401).json({
        msg: "El codigo ingresado no es correcto",
      });
      return;
    }

    await Activities.findOneAndUpdate(
      { code },
      { name, cost, finalPrice, netIncome }
    );

    res.status(200).json({
      msg: "Actividad actualizada con exito",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error en el servidor.",
    });
  }
};
