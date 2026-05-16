import React from 'react';
import { Camera } from 'lucide-react';
import fs from 'fs';
import path from 'path';
import Image from 'next/image';

interface ScreenshotPlaceholderProps {
  id: string;
  title: string;
  description: string;
  width?: string;
  height?: string;
}

export default function ScreenshotPlaceholder({
  id,
  title,
  description,
  width = '100%',
  height = '400px'
}: ScreenshotPlaceholderProps) {
  // Görselin yolunu oluştur
  const imageRelativePath = `/images/screenshots/${id}.png`;
  const imageAbsolutePath = path.join(process.cwd(), 'public', 'images', 'screenshots', `${id}.png`);
  
  // Dosya sisteminde kontrol et
  const imageExists = fs.existsSync(imageAbsolutePath);

  if (imageExists) {
    return (
      <div className="my-8 overflow-hidden rounded-xl border border-zinc-200 shadow-sm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={imageRelativePath} 
          alt={title} 
          className="w-full h-auto object-cover"
        />
      </div>
    );
  }

  return (
    <div 
      className="my-8 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-zinc-300 bg-zinc-50 p-6 text-center"
      style={{ width, minHeight: height }}
    >
      <div className="rounded-full bg-zinc-200 p-4 mb-4">
        <Camera className="h-8 w-8 text-zinc-500" />
      </div>
      <h3 className="text-lg font-semibold text-zinc-800 mb-2">
        Görsel Alanı: {title}
      </h3>
      <p className="text-sm text-zinc-600 max-w-md mb-4">
        {description}
      </p>
      <div className="mt-4 p-4 bg-white rounded-lg border border-zinc-200 text-left w-full max-w-lg">
        <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Geliştirici Notu</h4>
        <div className="text-sm font-mono text-zinc-700 bg-zinc-100 p-2 rounded">
          Dosya Adı: <span className="text-blue-600 font-bold">{id}.png</span><br />
          Klasör: <span className="text-blue-600 font-bold">/public/images/screenshots/</span>
        </div>
        <p className="text-xs text-zinc-500 mt-2">
          Görseli yukarıdaki dizine eklediğinizde otomatik olarak burada görüntülenecektir.
        </p>
      </div>
    </div>
  );
}
