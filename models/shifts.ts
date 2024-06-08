import { Model, Schema, model } from "mongoose";

export interface IShifts {
  category: string;
  date: string;
  schedule: string;
  name: string;
  price: number;
  location: string;
  phone: number;
  activity: string;
  code: string;
  state: boolean;
}

export const ShiftsSchema = new Schema<IShifts>({
  category: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  schedule: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  activity: {
    type: String,
    required: true,
  },
  code: {
    type: String,
  },
  state: {
    type: Boolean,
    default: true,
  },
});

ShiftsSchema.methods.toJSON = function () {
  const { __v, _id, ...shifts } = this.toObject();

  return shifts;
};

const Shifts: Model<IShifts> = model<IShifts>("Shifts", ShiftsSchema);

export default Shifts;
