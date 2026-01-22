const convertWebpImage = (file, options = {}) => {
  const { maxWidth, quality = 0.8 } = options;
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        let width = img.width;
        let height = img.height;
        if (maxWidth && width > maxWidth) {
          height = maxWidth / width * height;
          width = maxWidth;
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) return reject(new Error("Canvas context is null"));
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(img, 0, 0, width, height);
        canvas.toBlob(
          (blob) => {
            if (!blob) return reject(new Error("Blob 변환 실패"));
            resolve(blob);
          },
          "image/webp",
          quality
        );
      };
      img.onerror = (err) => reject(err);
    };
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
};
export {
  convertWebpImage as c
};
