import React from 'react';
import { notFound } from 'next/navigation';
import { getDocContent } from '@/lib/docs';
import ScreenshotPlaceholder from '@/components/ScreenshotPlaceholder';

export default async function DocPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const resolvedParams = await params;
  const slugPath = resolvedParams.slug.join('/');
  const doc = await getDocContent(slugPath);

  if (!doc) {
    notFound();
  }

  return (
    <div className="prose prose-zinc prose-a:text-green-600 max-w-none">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 mb-2">{doc.title}</h1>
      <p className="text-lg text-zinc-600 mb-8">{doc.description}</p>
      
      {doc.screenshot && (
        <ScreenshotPlaceholder 
          id={doc.screenshot.id}
          title={doc.screenshot.title}
          description={doc.screenshot.description}
        />
      )}

      <div className="mt-8 space-y-8">
        {doc.sections.map((section, idx) => (
          <div key={idx} className="scroll-mt-20" id={section.title.toLowerCase().replace(/\s+/g, '-')}>
            <h2 className="text-2xl font-semibold text-zinc-800 border-b border-zinc-200 pb-2 mb-4">
              {section.title}
            </h2>
            <div 
              className="text-zinc-700 leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: section.content }}
            />
            {section.screenshot && (
              <ScreenshotPlaceholder 
                id={section.screenshot.id}
                title={section.screenshot.title}
                description={section.screenshot.description}
              />
            )}
          </div>
        ))}
      </div>
      
      {doc.relatedLinks && doc.relatedLinks.length > 0 && (
        <div className="mt-12 pt-8 border-t border-zinc-200">
          <h3 className="text-lg font-semibold mb-4">İlişkili Sayfalar</h3>
          <ul className="flex flex-col gap-2">
            {doc.relatedLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="text-green-600 hover:text-green-700 font-medium flex items-center gap-1">
                  &rarr; {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
