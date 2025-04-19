export interface WebPOptions {
  maxWidth?: number; // 기본값: 원본 크기 유지
  quality?: number; // 기본값: 0.8
}

export const convertWebpImage = (file: File, options: WebPOptions = {}): Promise<Blob> => {
  const { maxWidth, quality = 0.8 } = options;

  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const img = new Image();
      img.src = reader.result as string;

      img.onload = () => {
        let width = img.width;
        let height = img.height;

        // 리사이즈 적용 (비율 유지)
        if (maxWidth && width > maxWidth) {
          height = (maxWidth / width) * height;
          width = maxWidth;
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        if (!ctx) return reject(new Error("Canvas context is null"));

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
