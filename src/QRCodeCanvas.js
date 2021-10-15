import React, { useRef, useEffect } from "react";
import QRCode from "qrcode";

function QRCodeCanvas({ text }) {
  const canvasRef = useRef();

  useEffect(() => {
    if (text) {
      QRCode.toCanvas(canvasRef.current, text, { width: 500 }, (error) => {
        if (error) console.log(error);
      });
    }
  }, [text]);

  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  );
}

export default QRCodeCanvas;
