import { diskStorage } from 'multer';

export const saveUploadedFile = {
  storage: diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
      const ext = file.originalname.split('.').pop();
      const fileName = `${Date.now()}_${Math.round(
        Math.random() * 1e6,
      )}.${ext}`;
      cb(null, fileName);
    },
  }),
  // File Upload Validation
  fileFilter: (req, file, cb) => {
    if (file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
};
