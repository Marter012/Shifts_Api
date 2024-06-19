import { Model, Schema, model } from "mongoose";

export interface IActivities {
  code: number;
  name: string;
  cost: number;
  finalPrice: number;
  netIncome: number;
  state: boolean;
}

export const ActivitiesSchema = new Schema<IActivities>({
  code: {
    type: Number,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  finalPrice: {
    type: Number,
    required: true,
  },
  netIncome: {
    type: Number,
    required: true,
  },
  state: {
    type: Boolean,
    default: true,
  },
});

ActivitiesSchema.methods.toJSON = function () {
  const { __v, _id, ...activities } = this.toObject();

  return activities;
};

const Activities: Model<IActivities> = model<IActivities>(
  "Activities",
  ActivitiesSchema
);

export default Activities;
