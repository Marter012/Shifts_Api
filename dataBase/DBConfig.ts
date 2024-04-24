import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
  try {
    const url = process.env.DB_URL;    
    if (!url) {
      throw new Error(
        "La URL de la base de datos no esta ingresada correctamente"
      );
    }
    await mongoose.connect(url);
    console.log("BD - SHIFTS ONLINE");
  } catch (error) {
    throw new Error("Error al a hora de iniciar la base de datos.");
  }
};
