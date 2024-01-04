import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://beatriz1712sc:soynuevabasededatos@cluster0.2gm0bzy.mongodb.net/test",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
     console.log("\u001b[1;35mConnection successful Database"); 
    
  } catch (error) {
     console.error("\u001b[1;31m Connection failed " + error, error);
    
  }
};

export default connectDB;
