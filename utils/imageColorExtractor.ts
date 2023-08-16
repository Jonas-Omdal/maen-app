/* import React, { useState } from 'react';
import { Image } from 'react-native';

const extractImageColor = async (imageUri) => {
  const image = Image.resolveAssetSource(imageUri);
  const imageWidth = image.width;
  const imageHeight = image.height;
  
  const response = await fetch(imageUri.uri);
  const blob = await response.blob();
  const reader = new FileReader();

  reader.onload = async () => {
    const buffer = new Uint8Array(reader.result);
    const imageData = new Uint32Array(buffer.buffer);

    const colorCounts = {};
    let maxCount = 0;
    let dominantColor = 0;

    for (let i = 0; i < imageData.length; i++) {
      const color = imageData[i];
      if (colorCounts[color]) {
        colorCounts[color]++;
      } else {
        colorCounts[color] = 1;
      }

      if (colorCounts[color] > maxCount) {
        maxCount = colorCounts[color];
        dominantColor = color;
      }
    }

    const r = (dominantColor >> 16) & 255;
    const g = (dominantColor >> 8) & 255;
    const b = dominantColor & 255;

    const hexColor = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    console.log('Dominant color:', hexColor);
  };

  reader.readAsArrayBuffer(blob);
}; */