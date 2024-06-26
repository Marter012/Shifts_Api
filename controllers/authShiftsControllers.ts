import { Request, Response } from "express";
import randomstring from "randomstring";
import Shifts, { IShifts } from "../models/shifts";

export const getShiftsControllers = async (req: Request, res: Response) => {
  try {
    const shifts = await Shifts.find().exec();
    if (shifts.length === 0) {
      res.status(404).json({
        msg: "No se encontraron turnos en la base de datos.",
      });
      return;
    }
    res.status(200).json({
      shifts,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error en el servidor.",
    });
  }
};

export const addShiftsControllers = async (req: Request, res: Response) => {
  const { date, schedule, name, price, location, phone, activity }: IShifts =
    req.body;

  const shift = new Shifts({
    date,
    schedule,
    name,
    price,
    location,
    phone,
    activity,
  });

  const newCode = randomstring.generate(6);

  shift.code = newCode;
  await shift.save();
  res.status(201).json({
    shift,
  });
};

export const cancelShiftsControllers = async (req: Request, res: Response) => {
  const { code }: IShifts = req.body;
  try {
    const shift = await Shifts.findOne({ code });

    if (!shift) {
      res.status(404).json({
        msg: "No se encontro el turno en la base de datos.",
      });
      return;
    }

    if (code !== shift.code) {
      res.status(401).json({
        msg: "El codigo ingresado no es correcto",
      });
      return;
    }

    await Shifts.findOneAndUpdate({ code }, { state: false });

    res.status(200).json({
      msg: "Turno cancelado con exito",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error en el servidor.",
    });
  }
};

export const updateShiftsControllers = async (req: Request, res: Response) => {
  const {
    code,
    date,
    schedule,
    name,
    price,
    location,
    phone,
    activity,
  }: IShifts = req.body;
  try {
    const shift = await Shifts.findOne({ code });

    if (!shift) {
      res.status(404).json({
        msg: "No se encontro el turno en la base de datos.",
      });
      return;
    }

    if (code !== shift.code) {
      res.status(401).json({
        msg: "El codigo ingresado no es correcto",
      });
      return;
    }

    await Shifts.findOneAndUpdate(
      { code },
      { date, schedule, name, price, location, phone, activity }
    );

    res.status(200).json({
      msg: "Turno actualizado con exito",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error en el servidor.",
    });
  }
};
